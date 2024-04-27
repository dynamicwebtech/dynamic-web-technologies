// React/Next Imports
import { useEffect } from "react";
import fs from "fs";
import path from "path";

// Data/Functions/Images Imports
import getDatabaseData from "@/assets/hooks/getDatabaseData";
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";
  const UTF8 = "utf-8";
  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_404_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_404.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_404_DATA_FC = fs.readFileSync(PH_404_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_404_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_404_DATA = JSON.parse(PH_404_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_404_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_404_DATA: null,
      },
    };
  }
}

const Custom404 = ({ PH_ICONS_DATA, PH_404_DATA }) => {
  const { reviews } = getDatabaseData();
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_404_DATA} icons_data={PH_ICONS_DATA} />

      <div id="PAGE_CNT"></div>
    </div>
  );
};

export default Custom404;

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Book_Contact/Book_Contact.module.css";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_BOOK_CONTACT_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_BookContact.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_BOOK_CONTACT_DATA_FC = fs.readFileSync(
    PH_BOOK_CONTACT_DATA_FP,
    UTF8
  );

  let PH_ICONS_DATA = undefined;
  let PH_BOOK_CONTACT_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_BOOK_CONTACT_DATA = JSON.parse(PH_BOOK_CONTACT_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_BOOK_CONTACT_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_BOOK_CONTACT_DATA: null,
      },
    };
  }
}

export default function Book_Contact({ PH_ICONS_DATA, PH_BOOK_CONTACT_DATA }) {
  const router = useRouter();

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  return (
    <div id="PAGE" className="page">
      <PageHead
        page_head_data={PH_BOOK_CONTACT_DATA}
        icons_data={PH_ICONS_DATA}
      />

      <div id="PAGE_CNT"></div>
    </div>
  );
}

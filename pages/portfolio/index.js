// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";
import { fetchPortfolioProjects } from "@/assets/functions/async/fetchers/fetchPortfolioProjects";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../../assets/components/global/Nav/AboveNav";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { LoginPopup } from "@/assets/components/global/All/LoginPopup.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";

import { TopHero } from "@/assets/components/pages/All/TopHero";
import { PortfolioProjects } from "@/assets/components/pages/Portfolio/PortfolioProjects";
import { AddPortfolioProjectForm } from "@/assets/components/global/All/AddPortfolioProjectForm";

// Style Imports
import "../../assets/styles/modules/Portfolio/Portfolio.module.css";
import styles from "../../assets/styles/modules/Portfolio/Portfolio.module.css";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_PORTFOLIO_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Portfolio.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_PORTFOLIO_DATA_FC = fs.readFileSync(PH_PORTFOLIO_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_PORTFOLIO_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_PORTFOLIO_DATA = JSON.parse(PH_PORTFOLIO_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_PORTFOLIO_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_PORTFOLIO_DATA: null,
      },
    };
  }
}

export default function Portfolio({ PH_ICONS_DATA, PH_PORTFOLIO_DATA }) {
  const router = useRouter();

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const TOP_HERO_OBJECT = {
    styles: styles,
    bg: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/portfolio/portfolio-top-bg.webp",
    heading: "Our Work.",
    text: "Dynamic Web Technologies has many years of building websites and helping businesses gain more attention under its belt. Get a look at our previous work below to see what we can offer you!",
  };

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_PORTFOLIO_DATA} icons_data={PH_ICONS_DATA} />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      <LoginPopup />
      {adminMode ? <AdminModeIndicator /> : null}

      <div id="PAGE_CNT">
        <TopHero object={TOP_HERO_OBJECT} />

        <PortfolioProjects />

        <AddPortfolioProjectForm styles={styles} />
      </div>

      <Footer />
    </div>
  );
}

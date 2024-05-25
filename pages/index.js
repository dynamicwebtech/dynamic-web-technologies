// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import getDatabaseData from "@/assets/hooks/getDatabaseData";
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";
import { fetchPortfolioProjects } from "@/assets/functions/async/fetchers/fetchPortfolioProjects.js";
import { fetchReviews } from "@/assets/functions/async/fetchers/fetchReviews.js";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../assets/components/global/Nav/AboveNav.js";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";
import { CustomerChat } from "@/assets/components/global/All/CustomerChat.js";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop.js";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout.js";
import { IndexPortfolioProjects } from "@/assets/components/pages/Index/IndexPortfolioProjects.js";
import { AddPortfolioProjectForm } from "@/assets/components/global/All/AddPortfolioProjectForm.js";
import { IndexBooking } from "@/assets/components/pages/Index/IndexBooking.js";
import { IndexServices } from "@/assets/components/pages/Index/IndexServices.js";
import { IndexPricing } from "@/assets/components/pages/Index/IndexPricing.js";
import { IndexBlogArticles } from "@/assets/components/pages/Index/IndexBlogArticles.js";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact.js";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
import index_styles from "../assets/styles/modules/Index/Index.module.css";
import all_styles from "../assets/styles/modules/All/All.module.css";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_INDEX_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Index.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_INDEX_DATA_FC = fs.readFileSync(PH_INDEX_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_INDEX_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_INDEX_DATA = JSON.parse(PH_INDEX_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_INDEX_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_INDEX_DATA: null,
      },
    };
  }
}

export default function Home({ PH_ICONS_DATA, PH_INDEX_DATA }) {
  const router = useRouter();

  /* const { reviews } = getDatabaseData(); */
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  const [reviews, setReviews] = useState([]);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  // Storing localStorage data with useState
  useEffect(() => {
    const STORED_PORTFOLIO_PROJECTS =
      localStorage.getItem("Portfolio Projects");
    const PORTFOLIO_PROJECTS = STORED_PORTFOLIO_PROJECTS
      ? JSON.parse(STORED_PORTFOLIO_PROJECTS)
      : [];
    const STORED_SITE_REVIEWS = localStorage.getItem("Site Reviews");
    const SITE_REVIEWS = STORED_SITE_REVIEWS
      ? JSON.parse(STORED_SITE_REVIEWS)
      : [];

    setPortfolioProjects(PORTFOLIO_PROJECTS);
    setReviews(SITE_REVIEWS);
  }, []);

  // console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_INDEX_DATA} icons_data={PH_ICONS_DATA} />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      {adminMode ? <AdminModeIndicator /> : null}
      <CustomerChat />

      <div id="PAGE_CNT">
        <IndexTop />
        <IndexPortfolioProjects portfolioProjects={portfolioProjects} />
        {adminMode ? <AddPortfolioProjectForm styles={all_styles} /> : null}
        <IndexAbout />
        <IndexPricing />
        <IndexBooking />
        <IndexServices />
        <IndexBlogArticles />
        <IndexContact />
      </div>

      <Footer />
    </div>
  );
}

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

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../assets/components/global/Nav/AboveNav.js";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop.js";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout.js";
import { AddPortfolioProjectForm } from "@/assets/components/global/All/AddPortfolioProjectForm.js";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
import index_styles from "../assets/styles/modules/Index/Index.module.css";
import { IndexPortfolioProjects } from "@/assets/components/pages/Index/IndexPortfolioProjects.js";

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

  const { reviews } = getDatabaseData();
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  const [portfolioProjects, setPortfolioProjects] = useState([]);

  // const fetchPortfolioProjects = async () => {
  //   try {
  //     const response = await fetch("/api/getPortfolioProjects");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setPortfolioProjects(data);

  //       // router.reload()
  //     } else {
  //       console.error("Failed to fetch portfolio projects");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching portfolio projects:", error);
  //   }
  // };

  useEffect(() => {
    fetchPortfolioProjects("/api/getPortfolioProjects", setPortfolioProjects);
  }, []);

  // console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const deletePortfolioProject = async (itemID, projects) => {
    try {
      // // axios.delete(`/api/getReviews?id=${id}`);
      const RESPONSE = await fetch(
        `/api/getPortfolioProjects?itemID=${itemID}`,
        {
          method: "DELETE",
        }
      );

      if (RESPONSE.ok) {
        console.log("Portfolio project deleted successfully!");
        setPortfolioProjects((prevProjects) =>
          prevProjects.filter((project) => project.itemID !== itemID)
        );
        router.reload();
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_INDEX_DATA} icons_data={PH_ICONS_DATA} />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      {adminMode ? <AdminModeIndicator /> : null}

      <div id="PAGE_CNT">
        <IndexTop />
        <IndexAbout />
        <IndexPortfolioProjects portfolioProjects={portfolioProjects} />

        {adminMode ? <AddPortfolioProjectForm styles={index_styles} /> : null}

        {/**
        {adminMode ? (
          <div>
            <br />
            <br />
            <br />
            <br />
            {portfolioProjects.map((project) => (
              <div key={project.itemID}>
                <br />
                <span>Project Name: {project.projectName}</span>
                <br />
                <span>Client Name: {project.clientName}</span>
                <br />
                <img src={project.src} />
                <br />
                <span>Creation Date: {project.creationDate}</span>
                <br />
                <a href={project.demoLink}>
                  Link To Project: {project.demoLink}
                </a>
                <br />
                <span>Project Description: {project.description}</span>
                <br />
                <span>Client Review: {project.review}</span>
                <br />
                <button
                  className="media-delete"
                  onClick={() => {
                    deletePortfolioProject(project.itemID);
                  }}
                >
                  Delete
                </button>{" "}
              </div>
            ))}
          </div>
        ) : null}
        */}
      </div>
    </div>
  );
}

// React/Next Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Library Imports
import { LazyLoadImage } from "react-lazy-load-image-component";

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { AboveNav } from "../../assets/components/global/Nav/AboveNav";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";

import { PortfolioProject } from "@/assets/components/pages/Portfolio/PortfolioProject";

// Style Imports
import "../../assets/styles/modules/Portfolio/Portfolio.module.css";
import styles from "../../assets/styles/modules/Portfolio/Portfolio.module.css";

export default function PortfolioProjectItemID() {
  const router = useRouter();

  const { itemID } = router.query;
  const [project, setProject] = useState(null);

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);
  console.log("Item ID:", itemID);

  useEffect(() => {
    const fetchData = async () => {
      if (itemID) {
        const fetch_path = `/api/getPortfolioProjects`;
        try {
          const response = await fetch(fetch_path);

          if (response.ok) {
            const data = await response.json();
            console.log("Fetched Data:", data); // Log fetched data for debugging

            // Getting correct project
            const selectedProject = data.find(
              (project) => project.itemID === itemID
            );
            console.log("Selected Project:", selectedProject); // Log selected project for debugging

            setProject(selectedProject);
          } else {
            console.error("Failed to fetch portfolio project.");
          }
        } catch (error) {
          console.error("Error fetching portfolio projects:", error);
        }
      }
    };

    fetchData();
  }, [itemID]);

  console.log("Project State:", project);

  return (
    <div id="PAGE" className="page">
      {project && (
        <Head>
          <title>{`DynamicWebTechnologies - ${project.projectName}`}</title>

          <meta name="keywords" content="n/a" />
          <meta name="description" content="n/a" />
          <meta name="robots" content="no index, no follow" />
          <link
            rel="canonical"
            href={`https://dynamicwebtechnologies.com/portfolio/${itemID}`}
          />

          {/** FACEBOOK */}

          <meta
            property="og:title"
            content={`DynamicWebTechnologies - ${project.projectName}`}
          />
          <meta name="og:description" content="n/a" />
          <meta
            name="og:url"
            content={`https://dynamicwebtechnologies.com/portfolio/${itemID}`}
          />
          <meta
            name="og:image"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta
            name="article:author"
            content={"Parker Phelps and Collin Westgate"}
          />
          {/***/}

          {/** LINKEDIN */}
          {/**
      <meta property="og:linkedin" content={props.page_head_data.linkedIn} />
      */}

          <link
            rel="icon"
            type="image/x-icon"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-64x64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-128x128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-192x192.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-32x32.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-310x150.png"
          />
        </Head>
      )}

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      {adminMode ? <AdminModeIndicator /> : null}

      <div id="PAGE_CNT">
        {/** 
        {project && (
          <div>
            <br />
            <span>Project Data</span>
            <br />
            <br />

            <span
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              Project ID: {itemID}
            </span>
            <br />
            <span
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              Project Name ID: {project.projectNameID}
            </span>
            <br />
            <LazyLoadImage
              src={project.src}
              alt={`DyanmicWebTechnologies - Image of ${project.projectName}.`}
            />
            <br />
            
            <span
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              {project.creationDate}
            </span>
          
            <br />
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Open Sans Bold",
              }}
            >
              {project.projectName}
            </h1>
            <span
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              {project.clientName}
            </span>
            <br />
            <span
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              Demo Link:
            </span>
            <a href={project.demoLink}>{project.demoLink}</a>
            <br />
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              {project.description}
            </p>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Open Sans",
              }}
            >
              {project.review}
            </p>
          </div>
        )}
        */}

        {project ? (
          <PortfolioProject project={project} />
        ) : (
          <div
            className={`${styles.loading_text} orientation-change-element half-second`}
          >
            Loading Project..
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

// React/Next Imports
import Head from "next/head";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import getDatabaseData from "@/assets/hooks/getDatabaseData";
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/404/404.module.css";
import styles from "../assets/styles/modules/404/404.module.css";

const NotFound = () => {
  const router = useRouter();

  const { reviews } = getDatabaseData();
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const PageHeadData = {
    pageID: "P_404",
    pageTitle: "DynamicWebTechnologies - 404",
    pageDesc: "This page does not exsist.",
    pageKeywords: [
      "DynamicWebTechnologies",
      "Web design agency",
      "Web design Winston Salem",
      "Web design Greensboro",
      "Web design Charlotte",
      "Web design Durham",
      "Web design Raleigh",
      "WordPress web designer",
      "WordPress web design",
      "Ecommerce web design",
      "Ecommerce web designer",
      "Web designer near me",
      "Affordable web designer",
      "Affordable ecommerce website",
      "Affordable WordPress website",
      "Shopify web design",
      "Shopify web designer",
      "Affordable Shopify website",
      "Local web designer",
      "Cheap web designer",
      "Cheap websites",
      "Local logo maker",
      "Local logo designers",
      "Home improvement Web designers",
      "HVAC web designers",
      "Painting web designers",
      "Web design services",
      "North Carolina web designers",
      "Local website builder",
      "Local web designers near me",
      "Local website designers",
    ],
    pageRobots: "no index, no follow",
    pageOGTitle: "DynamicWebTechnologies - 404",
    pageOGType: "website",
    pageOGLocale: "en_GB",
    pageOGImage:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png",
    pageOGImage_W: 512,
    pageOGImage_H: 512,
    pageTwitterImage:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png",
    pageTwitterCard: "",
    pageCanonical: "https://dynamicwebtechnologies.com/404",
  };
  const PageIconsData = {
    favicon:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon.ico",
    f16: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-16x16.png",
    f32: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-32x32.png",
    f48: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-48x48.png",
    f64: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-64x64.png",
    f96: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-96x96.png",
    f128: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-128x128.png",
    f192: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-192x192.png",
    f512: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png",
    ati57:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png",
    ati76:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png",
    ati120:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png",
    ati152:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png",
    ati180:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png",
    android72:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-72x72.png",
    android96:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-96x96.png",
    android144:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-144x144.png",
    android192:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-192x192.png",
    ms32: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-32x32.png",
    ms70: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-70x70.png",
    ms150:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-150x150.png",
    ms310:
      "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-310x150.png",
  };

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PageHeadData} icons_data={PageIconsData} />

      <div id="PAGE_CNT">
        <section className={`${styles.not_found_inner}`}>
          <div className={`${styles.not_found_inner_cnt}`}>
            <h1 className="orientation-change-element half-second">404</h1>
            <span
              className={`${styles.not_found_under_heading_text} orientation-change-element half-second`}
            >
              Uh Oh! This page was not found.
            </span>

            <p className="orientation-change-element half-second">
              The page you were looking for does not exsist. Please contact us
              for additional assistance or you can go back to the Home page
              using the link below.
            </p>

            <a href="/" className="orientation-change-element half-second">
              <span>Go To Home Page</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;

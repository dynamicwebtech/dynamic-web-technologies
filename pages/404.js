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
// import "../assets/styles/modules/404/404.module.css";

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
    pageDesc: "",
    pageKeywords: [],
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

      <div id="PAGE_CNT"></div>
    </div>
  );
};

export default NotFound;

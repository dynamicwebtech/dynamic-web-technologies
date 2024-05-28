// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../assets/components/global/Nav/AboveNav.js";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { LoginPopup } from "@/assets/components/global/All/LoginPopup.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";
import { CustomerChat } from "@/assets/components/global/All/CustomerChat.js";

import { TopHero } from "@/assets/components/pages/All/TopHero.js";

// Style Imports
import "../assets/styles/modules/Pricing/Pricing.module.css";
import styles from "../assets/styles/modules/Pricing/Pricing.module.css";
import { PricingPackages } from "@/assets/components/pages/Pricing/PricingPackages.js";
import { PricingAddOns } from "@/assets/components/pages/Pricing/PricingAddOns.js";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_PRICING_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Pricing.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_PRICING_DATA_FC = fs.readFileSync(PH_PRICING_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_PRICING_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_PRICING_DATA = JSON.parse(PH_PRICING_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_PRICING_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_PRICING_DATA: null,
      },
    };
  }
}

export default function Pricing({ PH_ICONS_DATA, PH_PRICING_DATA }) {
  const router = useRouter();

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const TOP_HERO_OBJECT = {
    styles: styles,
    bg: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/pricing/pricing-top-bg.webp",
    heading: "Project Plans.",
    text: "At Dynamic Web Technologies, we understand everyone is worried about the cost when it comes to having a website made. That is why we provide some of the best plans along with awesome add-ons in Winston-Salem, NC.",
  };

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_PRICING_DATA} icons_data={PH_ICONS_DATA} />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      <LoginPopup />
      {adminMode ? <AdminModeIndicator /> : null}
      <CustomerChat />

      <div id="PAGE_CNT">
        <TopHero object={TOP_HERO_OBJECT} />
        <PricingPackages />
        <PricingAddOns />
      </div>

      <Footer />
    </div>
  );
}

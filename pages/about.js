// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export async function getServerSideProps({ req }) {
  try {
    return {
      props: {},
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {},
    };
  }
}

export default function About() {
  const router = useRouter();

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  return (
    <div id="PAGE" className="page">
      <div id="PAGE_CNT" className="page-cnt"></div>
    </div>
  );
}

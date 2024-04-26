// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import getDatabaseData from "@/assets/hooks/getDatabaseData";
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

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

export default function Home() {
  const router = useRouter();

  const { reviews } = getDatabaseData();
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  return "";
}

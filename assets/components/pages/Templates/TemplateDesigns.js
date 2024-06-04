/**
 *
 *  This is the Template Designs
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MdError } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Templates/Templates.module.css";

export const TemplateDesigns = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [templateDesigns, setTemplateDesigns] = useState([]);

  // Displaying projects
  useEffect(() => {
    // Initializing load state
    let isMounted = true;
    const timer = setTimeout(() => {
      const STORED_TEMPLATE_DESIGNS = localStorage.getItem("Template Designs");
      if (isMounted && STORED_TEMPLATE_DESIGNS) {
        setTemplateDesigns(JSON.parse(STORED_TEMPLATE_DESIGNS));
        setLoading(false);
      }
    }, 1500);

    // Cleanup function to clear timeout and update mounted state
    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, []);

  const { adminMode } = checkAdminModeStatus();

  const deleteTemplateDesign = async (itemID) => {
    try {
      const RESPONSE = await fetch(`/api/getTemplateDesigns?itemID=${itemID}`, {
        method: "DELETE",
      });

      if (RESPONSE.ok) {
        console.log("Template design deleted successfully!");

        window.location.reload();
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return "";
};

/**
 *
 *  This is the Template Design
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MdError } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Templates/Templates.module.css";

export const TemplateDesign = ({ template }) => {
  const router = useRouter();

  const { adminMode } = checkAdminModeStatus();

  const { itemID, templateName, templateImg } = template;

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

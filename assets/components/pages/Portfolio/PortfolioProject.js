/**
 *
 *  This is the Portfolio Project ([itemID])
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  featuresDataArray_ELTYS,
  achievementsDataArray_ELTYS,
  featuresDataArray_RADIANCEGLOW,
  achievementsDataArray_RADIANCEGLOW,
  featuresDataArray_FIBERCOMPANY,
  achievementsDataArray_FIBERCOMPANY,
  featuresDataArray_SOFTSKILLIT,
  achievementsDataArray_SOFTSKILLIT,
  featuresDataArray_RTSYVISUALS,
  achievementsDataArray_RTSYVISUALS,
} from "@/assets/data/ProjectArrays";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Portfolio/Portfolio.module.css";

export const PortfolioProject = ({ project }) => {
  const router = useRouter();

  const { adminMode } = checkAdminModeStatus();

  const {
    itemID,
    src,
    projectName,
    projectNameID,
    // creationDate,
    clientName,
    demoLink,
    description,
    review,
  } = project;

  // const CREATION_DATE = project.creationDate;

  // Changing the content of the arrays for each project

  function getDataArray(dataArray, id) {
    if (projectNameID === id) {
      return dataArray;
    }
  }

  const featuresArray_ELTYS = getDataArray(
    featuresDataArray_ELTYS,
    "PNID_eltyspremiumpainting"
  );
  const achievementsArray_ELTYS = getDataArray(
    achievementsDataArray_ELTYS,
    "PNID_eltyspremiumpainting"
  );
  const featuresArray_RADIANCEGLOW = getDataArray(
    featuresDataArray_RADIANCEGLOW,
    "PNID_radianceglowhsc"
  );
  const achievementsArray_RADIANCEGLOW = getDataArray(
    achievementsDataArray_RADIANCEGLOW,
    "PNID_radianceglowhsc"
  );

  const deletePortfolioProject = async (itemID) => {
    try {
      const RESPONSE = await fetch(
        `/api/getPortfolioProjects?itemID=${itemID}`,
        {
          method: "DELETE",
        }
      );

      if (RESPONSE.ok) {
        console.log("Portfolio project deleted successfully!");

        router.push("/");
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <section id="portfolioProject" className={`${styles.portfolio_project}`}>
      <div className={`${styles.portfolio_project_inner}`}>
        <div className={`${styles.portfolio_project_inner_top}`}>
          <div
            className={`${styles.portfolio_project_inner_top_box} container-fluid`}
          >
            {adminMode ? (
              <span
                className={`${styles.item_id} orientation-change-element half-second`}
              >
                {itemID}
              </span>
            ) : null}
            {adminMode ? (
              <span
                className={`${styles.project_name_id} orientation-change-element half-second`}
              >
                {projectNameID}
              </span>
            ) : null}

            <LazyLoadImage
              src={src}
              alt={`DyanmicWebTechnologies - Image of ${projectName}.`}
            />

            <span
              className={`${styles.project_name} orientation-change-element half-second`}
            >
              {projectName}
            </span>

            <span
              className={`${styles.client_name} orientation-change-element half-second`}
            >
              {clientName}
            </span>

            <p className="orientation-change-element half-second">
              {description}
            </p>

            <a
              href={`${demoLink}`}
              className={`${styles.demo_link} orientation-change-element half-second`}
            >
              <span>Visit Website</span>
            </a>

            {adminMode ? (
              <button
                className={`${styles.delete} orientation-change-element half-second`}
                onClick={() => {
                  deletePortfolioProject(itemID);
                  // router.reload();
                }}
              >
                <span>Delete Project</span>
              </button>
            ) : null}
          </div>
        </div>

        <div className={`${styles.portfolio_project_inner_middle}`}>
          <div className={`${styles.portfolio_project_inner_middle_inner}`}>
            <span
              className={`${styles.review_name} orientation-change-element half-second`}
            >
              What Did They Think?
            </span>

            <p className="orientation-change-element half-second">{review}</p>
          </div>
        </div>

        <div className={`${styles.portfolio_project_inner_bottom}`}>
          <div
            className={`${styles.portfolio_project_inner_bottom_box} container-fluid`}
          >
            <div className={`${styles.portfolio_project_inner_bottom_row} row`}>
              <div
                className={`${styles.portfolio_project_inner_bottom_side} ${styles.portfolio_project_bottom_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div
                  className={`${styles.portfolio_project_inner_bottom_side_cnt}`}
                >
                  {projectNameID === "PNID_eltyspremiumpainting" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Features:
                      </span>
                      <ul>
                        {featuresArray_ELTYS.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_eltyspremiumpainting" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Achievements:
                      </span>
                      <ul>
                        {achievementsArray_ELTYS.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_radianceglowhsc" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Features:
                      </span>
                      <ul>
                        {featuresDataArray_RADIANCEGLOW.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_radianceglowhsc" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Achievements:
                      </span>
                      <ul>
                        {achievementsDataArray_RADIANCEGLOW.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_fibercompany" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Features:
                      </span>
                      <ul>
                        {featuresDataArray_FIBERCOMPANY.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_fibercompany" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Achievements:
                      </span>
                      <ul>
                        {achievementsDataArray_FIBERCOMPANY.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_softskillitcommunications" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Features:
                      </span>
                      <ul>
                        {featuresDataArray_SOFTSKILLIT.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_softskillitcommunications" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Achievements:
                      </span>
                      <ul>
                        {achievementsDataArray_SOFTSKILLIT.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_rtsyvisuals" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Features:
                      </span>
                      <ul>
                        {featuresDataArray_RTSYVISUALS.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projectNameID === "PNID_rtsyvisuals" && (
                    <div className={`${styles.list_set}`}>
                      <span
                        className={`${styles.list_set_name} orientation-change-element half-second`}
                      >
                        Achievements:
                      </span>
                      <ul>
                        {achievementsDataArray_RTSYVISUALS.map((item) => (
                          <li
                            key={item.id}
                            className="orientation-change-element half-second"
                          >
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

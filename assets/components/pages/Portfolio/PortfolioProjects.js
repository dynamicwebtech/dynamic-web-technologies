/**
 *
 *  This is the Portfolio Projects
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MdError } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Portfolio/Portfolio.module.css";

export const PortfolioProjects = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  // Displaying projects
  useEffect(() => {
    // Initializing load state
    let isMounted = true;
    const timer = setTimeout(() => {
      const STORED_PORTFOLIO_PROJECTS =
        localStorage.getItem("Portfolio Projects");
      if (isMounted && STORED_PORTFOLIO_PROJECTS) {
        setPortfolioProjects(JSON.parse(STORED_PORTFOLIO_PROJECTS));
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

        window.location.reload();
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <section id="portfolioProjects" className={`${styles.portfolio_projects}`}>
      <div className={`${styles.portfolio_projects_inner}`}>
        {/**
            

        */}

        <div className={styles.portfolio_projects_inner_main}>
          <div className={`${styles.blue_bar}`} />
          <div className={`${styles.green_bar}`} />

          {loading ? (
            <div
              className={`${styles.loading_text}`}
              style={{
                textAlign: "center",
                fontFamily: "Open Sans Semi Bold",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              Loading Projects..
            </div>
          ) : (
            <>
              {portfolioProjects.length > 0 ? (
                portfolioProjects.map((project) => (
                  <div key={project.itemID} className={`${styles.project}`}>
                    <div className={`${styles.project_inner}`}>
                      <div
                        className={`${styles.project_inner_box} container-fluid`}
                      >
                        <div className={`${styles.project_inner_row} row`}>
                          <div
                            className={`${styles.project_inner_side} ${styles.project_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                          >
                            <div className={`${styles.project_inner_side_cnt}`}>
                              <LazyLoadImage
                                src={project.src}
                                alt={`DynamicWebTechnologies - Image of ${project.projectName}.`}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles.project_inner_side} ${styles.project_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                          >
                            <div className={`${styles.project_inner_side_cnt}`}>
                              {adminMode ? (
                                <span
                                  className={`${styles.item_id} orientation-change-element half-second`}
                                >
                                  ItemID: {project.itemID}
                                </span>
                              ) : null}
                              {/**
                              <span
                                className={`${styles.creation_date} orientation-change-element half-second`}
                              >
                                {project.creationDate}
                              </span>
                              */}
                              <span
                                className={`${styles.project_name} orientation-change-element half-second`}
                              >
                                {project.projectName}
                              </span>
                              <span
                                className={`${styles.client_name} orientation-change-element half-second`}
                              >
                                {project.clientName}
                              </span>

                              <ul>
                                <li>
                                  <a
                                    href={`${project.demoLink}`}
                                    className={`${styles.demo_link} orientation-change-element half-second`}
                                  >
                                    <span>Visit Website</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`/portfolio/${project.itemID}`}
                                    className={`${styles.portfolio_link} orientation-change-element half-second`}
                                  >
                                    <span>Learn More</span>
                                  </a>
                                </li>
                              </ul>

                              {adminMode ? (
                                <button
                                  className={`${styles.delete} orientation-change-element half-second`}
                                  onClick={() => {
                                    deletePortfolioProject(project.itemID);
                                    // router.reload();
                                  }}
                                >
                                  <span>Delete Project</span>
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`${styles.zero_projects_error}`}>
                  <MdError
                    className={`${styles.icon} orientation-change-element half-second`}
                  />
                  <span className={`orientation-change-element half-second`}>
                    There are no projects to be displayed..
                  </span>
                </div>
              )}
            </>
          )}

          <div className={`${styles.green_bar}`} />
          <div className={`${styles.blue_bar}`} />
        </div>
      </div>
    </section>
  );
};

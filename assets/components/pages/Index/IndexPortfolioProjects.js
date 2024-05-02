/**
 *
 *  This is the Index Portfolio Projects
 *
 */

import { FaChevronRight } from "react-icons/fa";
import { MdError } from "react-icons/md";

import { LazyLoadImage } from "react-lazy-load-image-component";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexPortfolioProjects = (props) => {
  const PORTFOLIO_PROJECTS = props.portfolioProjects;

  const { adminMode } = checkAdminModeStatus();

  return (
    <section
      id="indexPortfolioProjects"
      className={`${styles.index_portfolio_projects}`}
    >
      <div className={`${styles.index_portfolio_projects_inner}`}>
        <div className={`${styles.index_portfolio_projects_inner_top}`}>
          <div className={`${styles.index_portfolio_projects_inner_top_cnt}`}>
            <h2 className="orientation-change-element half-second">
              Previous Client Projects.
            </h2>
            <p className="orientation-change-element half-second">
              Get a look at the previous projects DynamicWebTechnologies has
              done over the years below.
            </p>

            <a
              href="/portfolio"
              className="orientation-change-element half-second"
            >
              <span>View All</span>
              <FaChevronRight />
            </a>
          </div>

          <div className={`${styles.blue_bar}`} />
          <div className={`${styles.green_bar}`} />
        </div>

        <div className={`${styles.index_portfolio_projects_inner_main}`}>
          {PORTFOLIO_PROJECTS.length > 0 ? (
            PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
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
                          <span
                            className={`${styles.creation_date} orientation-change-element half-second`}
                          >
                            {project.creationDate}
                          </span>
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
        </div>
      </div>
    </section>
  );
};
/**
 *
 *  This is the Index About
 *
 */

import { ABOUT_BG } from "@/assets/cdns/CDNBgs";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import styles from "../../../styles/modules/Index/Index.module.css";
import { FaChevronRight } from "react-icons/fa";

export const IndexAbout = () => {
  const HEADING = HeadingElement("Getting Familiar", "With Our Agency.");

  return (
    <section id="indexAbout" className={`${styles.index_about}`}>
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_box} container-fluid`}>
          <div className={`${styles.index_about_inner_row} row`}>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_L} col-lg-6 col-md-5 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.bg}`} />

              <div className={`${styles.blue_bar}`} />
              <div className={`${styles.green_bar}`} />
            </div>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_R} col-lg-6 col-md-7 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.index_about_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  Getting Familiar
                  <br />
                  <span> </span>
                  With Our Agency.
                </h2>

                <p className="orientation-change-element half-second">
                  Discover the captivating story behind DynamicWebTechnologies,
                  based right here in scenic North Carolina. Learn why we're the
                  ultimate choice to bring your dream website to life.
                </p>

                <a
                  href="/about"
                  className="orientation-change-element half-second"
                >
                  <span>Learn More</span>
                  <FaChevronRight className={`${styles.icon}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

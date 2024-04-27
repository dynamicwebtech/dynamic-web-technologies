/**
 *
 *  This is the AboveNav
 *
 */

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const AboveNav = () => {
  return (
    <section id="aboveNav" className={`${styles.above_nav}`}>
      <div className={`${styles.above_nav_inner}`}>
        <div className={`${styles.above_nav_inner_box} container-fluid`}>
          <div className={`${styles.above_nav_inner_row} row`}>
            <div
              className={`${styles.above_nav_inner_side} ${styles.above_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.above_nav_inner_side_cnt}`}>
                <span className="orientation-change-element half-second">
                  Get Support:
                </span>

                <a
                  href="/contact#contactInfo"
                  className="orientation-change-element half-second"
                >
                  <FaPhoneAlt className={`${styles.icon}`} />
                </a>
                <a
                  href="/contact#contactForm"
                  className={`${styles.email_link} orientation-change-element half-second`}
                >
                  <MdEmail className={`${styles.icon}`} />
                </a>
              </div>
            </div>
            <div
              className={`${styles.above_nav_inner_side} ${styles.above_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.above_nav_inner_side_cnt}`}>
                <a
                  href="/contact#contactInfo"
                  className="orientation-change-element half-second"
                >
                  <span className="orientation-change-element half-second">
                    Send Us A Text:
                  </span>

                  <BsChatTextFill className={`${styles.icon}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

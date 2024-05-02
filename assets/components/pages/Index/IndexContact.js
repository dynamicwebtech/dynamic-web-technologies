/**
 *
 *  This is the Index Contact
 *
 */

import { FaChevronRight } from "react-icons/fa";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <div className={`${styles.index_contact_inner}`}>
        <div className={`${styles.index_contact_inner_box} container-fluid`}>
          <div className={`${styles.index_contact_inner_row} row`}>
            <div
              className={`${styles.index_contact_inner_side} ${styles.index_contact_L} col-lg-6 col-md-5 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.bg}`} />

              <div className={`${styles.blue_bar}`} />
              <div className={`${styles.green_bar}`} />
            </div>
            <div
              className={`${styles.index_contact_inner_side} ${styles.index_contact_R} col-lg-6 col-md-7 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.index_contact_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  We Are Always
                  <br />
                  <span> </span>
                  Here To Help!
                </h2>

                <p className="orientation-change-element half-second">
                  DynamicWebTechnologies prioritizes customer experience,
                  mirroring the renowned hospitality of North Carolina. We're
                  always here to help with any issue or question, ensuring your
                  journey with us is smooth and satisfying.
                </p>

                <a
                  href="/book_contact#contactForm"
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

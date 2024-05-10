/**
 *
 *  This is the Index Booking
 *
 */

import { BOOK_A_PROJECT_BG } from "@/assets/cdns/CDNBgs";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import styles from "../../../styles/modules/Index/Index.module.css";
import { FaChevronRight } from "react-icons/fa";

export const IndexBooking = () => {
  const HEADING = HeadingElement("Build Your Dream", "Website Today.");

  return (
    <section id="indexBooking" className={`${styles.index_booking}`}>
      <div className={`${styles.index_booking_inner}`}>
        <div className={`${styles.index_booking_inner_box} container-fluid`}>
          <div className={`${styles.index_booking_inner_row} row`}>
            <div
              className={`${styles.index_booking_inner_side} ${styles.index_booking_L} col-lg-6 col-md-5 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.bg}`} />

              <div className={`${styles.blue_bar}`} />
              <div className={`${styles.green_bar}`} />
            </div>
            <div
              className={`${styles.index_booking_inner_side} ${styles.index_booking_R} col-lg-6 col-md-7 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.index_booking_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  Build Your Dream
                  <br />
                  <span> </span>
                  Website Today.
                </h2>

                <p className="orientation-change-element half-second">
                  Dynamic Web Technologies, based in Winston-Salem, NC, is
                  always prepared to tackle any web design project, ensuring
                  your company sees real results. Reach out today to book your
                  project and start your journey to digital success!
                </p>

                <a
                  href="/book_contact#bookForm"
                  className="orientation-change-element half-second"
                >
                  <span>Book A Project</span>
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

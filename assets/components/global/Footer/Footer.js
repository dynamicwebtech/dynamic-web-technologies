/**
 *
 *  This is the Footer
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaCopyright, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";

import { Logo } from "../All/Logo";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  useEffect(() => {
    const DATE = new Date();

    const CURRENT_YEAR = DATE.getFullYear();

    document.getElementById("currentYearHolder").innerText = CURRENT_YEAR;
  }, []);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_inner}`}>
        <div className={`${styles.footer_inner_box} container-fluid`}>
          <div className={`${styles.footer_inner_row} row`}>
            <div
              className={`${styles.footer_inner_side} ${styles.footer_L} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.footer_inner_side_cnt}`}>
                <Logo isNav={false} />

                <div
                  className={`${styles.copyright} orientation-change-element half-second`}
                >
                  <FaCopyright className={`${styles.icon}`} />

                  <span>
                    Copyright <span id="currentYearHolder">#</span>, All rights
                    reserved.
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.footer_inner_side} ${styles.footer_M} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.footer_inner_side_cnt}`}>
                <ul>
                  {router.pathname !== "/" ? (
                    <li>
                      <a
                        href="/"
                        className="orientation-change-element half-second"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Home</span>
                    </li>
                  )}

                  {router.pathname !== "/about" ? (
                    <li>
                      <a
                        href="/about"
                        className="orientation-change-element half-second"
                      >
                        <span>About</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>About</span>
                    </li>
                  )}

                  {router.pathname !== "/portfolio" &&
                  !router.pathname.startsWith("/portfolio/") ? (
                    <li>
                      <a
                        href="/portfolio"
                        className="orientation-change-element half-second"
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Portfolio</span>
                    </li>
                  )}

                  {router.pathname !== "/services" ? (
                    <li>
                      <a
                        href="/services"
                        className="orientation-change-element half-second"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Services</span>
                    </li>
                  )}

                  {router.pathname !== "/pricing" ? (
                    <li>
                      <a
                        href="/pricing"
                        className="orientation-change-element half-second"
                      >
                        <span>Pricing</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Pricing</span>
                    </li>
                  )}

                  {router.pathname !== "/book_contact" ? (
                    <li>
                      <a
                        href="/book_contact"
                        className="orientation-change-element half-second"
                      >
                        <span>Book/Contact</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Book/Contact</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div
              className={`${styles.footer_inner_side} ${styles.footer_R} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.footer_inner_side_cnt}`}>
                <ul>
                  <li>
                    <a
                      href="/book_contact#contactInfo"
                      className="orientation-change-element half-second"
                    >
                      <span>Email Us</span>

                      <MdEmail className={`${styles.icon}`} />
                    </a>
                  </li>

                  <li></li>

                  <li>
                    <a
                      href="/book_contact#contactInfo"
                      className="orientation-change-element half-second"
                    >
                      <span>Call Us</span>

                      <FaPhoneAlt className={`${styles.icon}`} />
                    </a>
                  </li>
                </ul>

                <a
                  className={`${styles.message_us} orientation-change-element half-second`}
                  href="/book_contact#contactInfo"
                >
                  <span>Send Us A Text</span>

                  <BsChatTextFill className={`${styles.icon}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 *
 *  This is the Desktop Nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { Logo } from "../All/Logo";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  // Displaying link lines
  useEffect(() => {
    if (document.querySelector(".nav-link-lines")) {
      document.querySelector(".nav-link-lines").style.opacity = 1;
      document.querySelector(".nav-link-lines").style.visibility = "visible";
    }
  }, []);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <Logo isNav={true} />
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
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

                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
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

                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
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

                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
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
                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
                    </li>
                  )}

                  {router.pathname !== "/pricing" ? (
                    <li>
                      <a
                        href="/pricing"
                        className="orientation-change-element half-second"
                      >
                        <span>Plans</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Plans</span>
                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
                    </li>
                  )}

                  {router.pathname !== "/blog" ? (
                    <li>
                      <a
                        href="/blog"
                        className="orientation-change-element half-second"
                      >
                        <span>Articles</span>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>Articles</span>
                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
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
                      <div className="nav-link-lines">
                        <span className={`${styles.top_line}`} />
                        <span className={`${styles.bottom_line}`} />
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.blue_bar}`} />
      <div className={`${styles.green_bar}`} />
    </nav>
  );
};

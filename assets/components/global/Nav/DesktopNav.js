/**
 *
 *  This is the Desktop Nav
 *
 */

import { useRouter } from "next/router";

import { Logo } from "../All/Logo";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
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

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
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

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span>About</span>
                    </li>
                  )}

                  {router.pathname !== "/portfolio" ? (
                    <li>
                      <a
                        href="/portfolio"
                        className="orientation-change-element half-second"
                      >
                        <span>Portfolio</span>

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
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

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
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

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
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

                        <div>
                          <span className={`${styles.top_line}`} />
                          <span className={`${styles.bottom_line}`} />
                        </div>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

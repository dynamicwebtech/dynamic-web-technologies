/**
 *
 *  This is the Mobile Nav
 *
 */

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { FaBars, FaTimes } from "react-icons/fa";

import { Logo } from "../All/Logo";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();
  const mobileNavRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setTimeout(() => {
          closeMobileNav();
        }, 150);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openMobileNav = () => {
    document.getElementById("navToggler").style.display = "none";
    document.getElementById("navCloser").style.display = "block";

    document.getElementById("mobileNavLinks").style.display = "block";
  };

  const closeMobileNav = () => {
    document.getElementById("navToggler").style.display = "block";
    document.getElementById("navCloser").style.display = "none";

    document.getElementById("mobileNavLinks").style.display = "none";
  };

  // Adding class if in Admin Mode (To fix the responsiveness)
  const { adminMode } = checkAdminModeStatus();

  return (
    <div
      ref={mobileNavRef}
      id="mobileNavHolder"
      className={styles.mobile_nav_holder}
    >
      <nav id="mobileNav" className={`${styles.mobile_nav}`}>
        <div className={`${styles.mobile_nav_inner}`}>
          <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <Logo isNav={true} />
                </div>
              </div>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <button
                    id="navToggler"
                    className={`${styles.nav_toggler} orientation-change-element half-second`}
                    onClick={(e) => {
                      e.preventDefault();
                      openMobileNav();
                    }}
                  >
                    <FaBars />
                  </button>

                  <button
                    id="navCloser"
                    className={`${styles.nav_closer} orientation-change-element half-second`}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileNav();
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.blue_bar}`} />
        <div className={`${styles.green_bar}`} />
      </nav>

      <ul
        id="mobileNavLinks"
        className={`${styles.mobile_nav_links} ${
          adminMode ? styles.mobile_nav_am_fix : ""
        }`}
      >
        {router.pathname !== "/" ? (
          <li>
            <a href="/" className="orientation-change-element half-second">
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
            <a href="/about" className="orientation-change-element half-second">
              <span>About</span>
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
  );
};

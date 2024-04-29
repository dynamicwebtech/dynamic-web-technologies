/**
 *
 *  This is the AboveNav
 *
 */

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { MdEmail, MdAccountCircle, MdLogout } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";

import { LoginPopup } from "../All/LoginPopup";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const AboveNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginPopupOpened, setLoginPopupOpened] = useState(null);

  // Displaying/Hiding Login/Logout buttons
  useEffect(() => {
    const LOGGED_IN_VARIABLE = localStorage.getItem("Current User");

    if (LOGGED_IN_VARIABLE) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginCheckbox = (e) => {
    const LOGIN_POPUP = document.getElementById("loginPopup");
    const loginCheckbox = document.getElementById("loginCB");

    if (loginCheckbox.checked) {
      LOGIN_POPUP.style.display = "block";
    } else {
      LOGIN_POPUP.style.display = "none";
    }
  };

  const aboveNavRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboveNavRef.current && !aboveNavRef.current.contains(event.target)) {
        const loginCheckbox = document.getElementById("loginCB");
        if (loginCheckbox.checked) {
          loginCheckbox.checked = false;
          document.getElementById("loginPopup").style.display = "none";
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const router = useRouter();

  return (
    <section id="aboveNav" className={`${styles.above_nav}`} ref={aboveNavRef}>
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
                  href="/book_contact#contactInfo"
                  className="orientation-change-element half-second"
                >
                  <FaPhoneAlt className={`${styles.icon}`} />
                </a>
                <a
                  href="/book_contact#contactForm"
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
                  href="/book_contact#contactInfo"
                  className="orientation-change-element half-second"
                >
                  <span className="orientation-change-element half-second">
                    Send Us A Text:
                  </span>

                  <BsChatTextFill className={`${styles.icon}`} />
                </a>

                <div className={`${styles.login_btns}`}>
                  {isLoggedIn ? (
                    <button
                      className="orientation-change-element half-second"
                      onClick={(e) => {
                        e.preventDefault();

                        RemoveStorageVariable("local", "Current User");

                        router.reload();
                      }}
                      id="logoutBtn"
                    >
                      <span>Logout</span>
                      <MdLogout className={`${styles.icon}`} />
                    </button>
                  ) : (
                    <button
                      className="orientation-change-element half-second"
                      id="loginBtn"
                    >
                      <input
                        type="checkbox"
                        id="loginCB"
                        onChange={(e) => {
                          handleLoginCheckbox(e);
                        }}
                      />
                      <span>Login</span>
                      <MdAccountCircle className={`${styles.icon}`} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <LoginPopup />
      </div>
    </section>
  );
};

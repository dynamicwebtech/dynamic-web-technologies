/**
 *
 *  This is the Book/Contact Form
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import emailjs from "@emailjs/browser";

import CheckValidEmail from "@/assets/functions/data/email/CheckValidEmail";
import CheckValidZip from "@/assets/functions/data/email/CheckZipCode";
import CheckValidPhoneNumber from "@/assets/functions/data/email/CheckValidPhoneNumber";
import CheckForSpaceInFirstCharacter from "@/assets/functions/data/email/CheckForSpaceInFirstCharacter";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Book_Contact/Book_Contact.module.css";

export const BookContactForm = () => {
  const BORC_OPTIONS = [
    "-- BOOKING OR CONTACT --",
    "Book a Project",
    "Customer Support",
  ];

  const CONTACT_PLACEHOLDER =
    "Ex: I would like to talk with a sales consultant.";
  const BOOKING_PLACEHOLDER =
    "Ex: I would like to purchase the 'Basic' package.";

  const router = useRouter();

  function resetForm() {
    const FORM_ELEMENTS = document.querySelectorAll(".form-element");

    FORM_ELEMENTS.forEach((element) => {
      element.style.borderColor = "white";

      if (
        element.type === "text" ||
        element.type === "email" ||
        element.type === "tel" ||
        element.type === "TEXTAREA"
      ) {
        element.value = "";
      }

      //   if (element.type === "select") {
      //     element.selectedIndex = 0;
      //   }
    });

    document.getElementById("clientBORC").selectedIndex = 0;

    document.getElementById("clientMessage").placeholder =
      "Type your message here";
  }

  function resetBorderColor(type, element) {
    if (type == "input") {
      if (element.value !== "") {
        element.style.borderColor = "white";
      }
    }

    if (type == "select") {
      if (element.selectedIndex !== 0) {
        element.style.borderColor = "white";
      }
    }
  }

  function tabPressChecking(checker, element, e) {
    if (checker) {
      if (e.keyCode === 9) {
        if (element.value !== "") {
          element.style.borderColor = "white";
        } else {
          element.style.borderColor = "red";
        }

        if (!checker) {
          element.style.borderColor = "red";
        } else {
          element.style.borderColor = "white";
        }
      }
    } else {
      if (e.keyCode === 9) {
        if (element.value !== "") {
          element.style.borderColor = "white";
        } else {
          element.style.borderColor = "red";
        }
      }
    }
  }

  function checkEmptyOrSpaceValue(element, spaceChecker) {
    if (element.value == "" || spaceChecker) {
      return false;
    }

    if (element.value !== "" && !spaceChecker) {
      return true;
    }
  }

  // Starting EmailJS
  const EMAILJS_PK = "RtWsd320lLqYQS6kT";
  emailjs.init(EMAILJS_PK);

  const EmailSend = () => {
    const FORM_ELEMENTS = document.querySelectorAll(".form-element");

    // Tracking validation variables
    let sentSuccess = false;

    const SERVICE_ID = "service_swo7tr8";
    const TEMPLATE_ID = "template_bglb285";

    let rowOnePassed = false;
    let rowTwoPassed = false;
    let rowThreePassed = false;
    let rowFourPassed = false;

    const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[0]);
    const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[1]);
    const SPACE_EMAIL = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[2]);
    const SPACE_PHONE = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[3]);
    const SPACE_MESSAGE = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[5]);

    const FN_EMPTY_OR_SPACE_CHECKER = checkEmptyOrSpaceValue(
      FORM_ELEMENTS[0],
      SPACE_FIRST_NAME
    );
    const LN_EMPTY_OR_SPACE_CHECKER = checkEmptyOrSpaceValue(
      FORM_ELEMENTS[1],
      SPACE_LAST_NAME
    );
    const EMAIL_EMPTY_OR_SPACE_CHECKER = checkEmptyOrSpaceValue(
      FORM_ELEMENTS[2],
      SPACE_EMAIL
    );
    const CHECK_VALID_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
    const PHONE_EMPTY_OR_SPACE_CHECKER = checkEmptyOrSpaceValue(
      FORM_ELEMENTS[3],
      SPACE_PHONE
    );
    const CHECK_VALID_PHONE = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
    const MESSAGE_EMPTY_OR_SPACE_CHECKER = checkEmptyOrSpaceValue(
      FORM_ELEMENTS[5],
      SPACE_MESSAGE
    );

    // Row 1
    if (!FN_EMPTY_OR_SPACE_CHECKER) {
      FORM_ELEMENTS[0].style.borderColor = "red";
    }
    if (FN_EMPTY_OR_SPACE_CHECKER) {
      resetBorderColor("input", FORM_ELEMENTS[0]);
    }

    if (!LN_EMPTY_OR_SPACE_CHECKER) {
      FORM_ELEMENTS[1].style.borderColor = "red";
    }
    if (LN_EMPTY_OR_SPACE_CHECKER) {
      resetBorderColor("input", FORM_ELEMENTS[1]);
    }

    if (FN_EMPTY_OR_SPACE_CHECKER && LN_EMPTY_OR_SPACE_CHECKER) {
      rowOnePassed = true;
    }

    // Row 2
    if (!EMAIL_EMPTY_OR_SPACE_CHECKER) {
      FORM_ELEMENTS[2].style.borderColor = "red";
    }
    if (EMAIL_EMPTY_OR_SPACE_CHECKER) {
      resetBorderColor("input", FORM_ELEMENTS[2]);
    }

    if (!PHONE_EMPTY_OR_SPACE_CHECKER) {
      FORM_ELEMENTS[3].style.borderColor = "red";
    }
    if (PHONE_EMPTY_OR_SPACE_CHECKER) {
      resetBorderColor("input", FORM_ELEMENTS[3]);
    }

    if (
      EMAIL_EMPTY_OR_SPACE_CHECKER &&
      CHECK_VALID_EMAIL &&
      PHONE_EMPTY_OR_SPACE_CHECKER &&
      CHECK_VALID_PHONE
    ) {
      rowTwoPassed = true;
    }
    if (!CHECK_VALID_EMAIL) {
      console.log("Email is not valid..");
    }
    if (!CHECK_VALID_PHONE) {
      console.log("Phone Number is not valid..");
    }

    // Row 3
    if (FORM_ELEMENTS[4].selectedIndex == 0) {
      FORM_ELEMENTS[4].style.borderColor = "red";
    } else {
      resetBorderColor("select", FORM_ELEMENTS[4]);
      rowThreePassed = true;
    }

    // Row 4
    if (!MESSAGE_EMPTY_OR_SPACE_CHECKER) {
      FORM_ELEMENTS[5].style.borderColor = "red";
    }
    if (MESSAGE_EMPTY_OR_SPACE_CHECKER) {
      resetBorderColor("input", FORM_ELEMENTS[5]);
      rowFourPassed = true;
    }

    // Validations for all rows
    if (rowOnePassed && rowTwoPassed && rowThreePassed && rowFourPassed) {
      const EMAILJS_TEMPLATE_PARAMS = {
        clientFN: FORM_ELEMENTS[0].value,
        clientLN: FORM_ELEMENTS[1].value,
        clientEmail: FORM_ELEMENTS[2].value,
        clientPhone: FORM_ELEMENTS[3].value,
        clientBORC:
          FORM_ELEMENTS[4].options[FORM_ELEMENTS[4].selectedIndex].text,
        clientMessage: FORM_ELEMENTS[5].value,
      };

      console.table(EMAILJS_TEMPLATE_PARAMS);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, EMAILJS_TEMPLATE_PARAMS)
        .then((res) => {
          console.log("Email sent successfully: " + res);

          sentSuccess = true;

          DeclareStorageVariable(
            "session",
            "Book/Contact Submission Sent",
            true
          );

          setTimeout(() => {
            if (sentSuccess) {
              router.reload();
            }
          }, 300);
        })
        .catch((error) => {
          console.error("Error sending email: " + error);
        });
    }
  };

  // Checking for contact/bookForm hash
  useEffect(() => {
    const HASH = router.asPath.split("#")[1];

    if (HASH === "bookForm") {
      document.getElementById("clientBORC").selectedIndex = 1;

      document.getElementById("clientMessage").placeholder =
        BOOKING_PLACEHOLDER;

      setTimeout(() => {
        document
          .getElementById("bookContactForm")
          .scrollIntoView({ behavior: "smooth" });
      }, 400);
    }

    if (HASH === "contactForm") {
      document.getElementById("clientBORC").selectedIndex = 2;

      document.getElementById("clientMessage").placeholder =
        CONTACT_PLACEHOLDER;

      setTimeout(() => {
        document
          .getElementById("bookContactForm")
          .scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, []);

  return (
    <section id="bookContactForm" className={`${styles.book_contact_form}`}>
      <div className={`${styles.book_contact_form_inner}`}>
        <h2 className="orientation-change-element half-second">
          Reach Out To Us Today.
        </h2>

        <form
          autoComplete="off"
          id="bookContactForm"
          onSubmit={(e) => {
            e.preventDefault();
            EmailSend();
          }}
          onReset={(e) => {
            e.preventDefault();
            resetForm();
          }}
          noValidate
        >
          <div className={`${styles.form_box} container-fluid`}>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_set} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientFN"
                  className="orientation-change-element half-second"
                >
                  First Name:
                </label>
                <input
                  onChange={(e) => {
                    e.currentTarget.style.borderColor = "white";
                  }}
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  type="text"
                  name="clientFN"
                  id="clientFN"
                  placeholder="Enter First Name"
                />
              </div>
              <div
                className={`${styles.form_set} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientLN"
                  className="orientation-change-element half-second"
                >
                  Last Name:
                </label>
                <input
                  onChange={(e) => {
                    e.currentTarget.style.borderColor = "white";
                  }}
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  type="text"
                  name="clientLN"
                  id="clientLN"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_set} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientEmail"
                  className="orientation-change-element half-second"
                >
                  Email Address:
                </label>
                <input
                  onChange={(e) => {
                    e.currentTarget.style.borderColor = "white";
                  }}
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  type="email"
                  name="clientEmail"
                  id="clientEmail"
                  placeholder="Enter Email Address"
                />
              </div>
              <div
                className={`${styles.form_set} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientPhone"
                  className="orientation-change-element half-second"
                >
                  Phone Number:
                </label>
                <input
                  onChange={(e) => {
                    e.currentTarget.style.borderColor = "white";
                  }}
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  type="tel"
                  name="clientPhone"
                  id="clientPhone"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className={`${styles.form_row} row`}>
              <div
                className={`${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientBORC"
                  className="orientation-change-element half-second"
                >
                  Reason for Contact:
                </label>

                <select
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  name="clientBORC"
                  id="clientBORC"
                  onChange={(e) => {
                    if (e.currentTarget.value === "-- BOOKING OR CONTACT --") {
                      document.getElementById("clientMessage").placeholder =
                        "Type your message here";
                    }

                    if (e.currentTarget.value === "Book a Project") {
                      document.getElementById("clientMessage").placeholder =
                        BOOKING_PLACEHOLDER;

                      e.currentTarget.style.borderColor = "white";
                    }

                    if (e.currentTarget.value === "Customer Support") {
                      document.getElementById("clientMessage").placeholder =
                        CONTACT_PLACEHOLDER;

                      e.currentTarget.style.borderColor = "white";
                    }
                  }}
                >
                  {BORC_OPTIONS.map((option) => (
                    <option>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={`${styles.form_row} row`}>
              <div
                className={`${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <label
                  for="clientMessage"
                  className="orientation-change-element half-second"
                >
                  Message/Comments:
                </label>

                <textarea
                  onChange={(e) => {
                    e.currentTarget.style.borderColor = "white";
                  }}
                  style={{ border: "2px solid white" }}
                  className="form-element"
                  name="clientMessage"
                  id="clientMessage"
                  placeholder="Type your message here"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.form_btns}`}>
            <button
              type={"reset"}
              className={`${styles.clear} orientation-change-element half-second`}
            >
              <span>CLEAR</span>
            </button>
            <button
              type={"submit"}
              className={`${styles.send} orientation-change-element half-second`}
            >
              <span>SEND</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

/**
 *
 *  This is the Book/Contact Form
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/modules/Book_Contact/Book_Contact.module.css";

export const BookContactInfo = () => {
  const PLACEHOLDER_IMG =
    "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/about/placeholder-user.jpg";

  const COLLIN_PIC =
    "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/about/img-of-collin.jpg";
  const PARKER_PIC =
    "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/about/img_of_parker.jpg";

  const TEAM = [
    {
      teamID: "T_1",
      teamName: "Collin Westgate",
      teamRole: "(Owner/Developer)",
      teamPhone: "(336) 986-1842",
      teamImg: COLLIN_PIC,
    },
    {
      teamID: "T_2",
      teamName: "Parker Phelps",
      teamRole: "(Co-Owner/Lead Developer)",
      teamPhone: "(336) 831-3432",
      teamImg: PARKER_PIC,
    },
  ];

  const router = useRouter();

  // Checking for #contactInfo
  useEffect(() => {
    const HASH = router.asPath.split("#")[1];

    if (HASH === "contactInfo") {
      document
        .getElementById("bookContactInfo")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="bookContactInfo" className={`${styles.book_contact_info}`}>
      <div className={`${styles.book_contact_info_inner}`}>
        <h2 className="orientation-change-element half-second">Contact Info</h2>

        <div className={`${styles.teams_holder}`}>
          {TEAM.map((team) => (
            <div key={team.teamID} className={`${styles.team} container-fluid`}>
              <div className={`${styles.team_top} row`}>
                <div
                  className={`${styles.team_top_side} ${styles.team_top_L} col-lg-10 col-md-10 col-sm-12 col-xs-12`}
                >
                  <div>
                    <span
                      className={`${styles.team_name} orientation-change-element half-second`}
                    >
                      {team.teamName}
                    </span>
                    <span
                      className={`${styles.team_role} orientation-change-element half-second`}
                    >
                      {team.teamRole}
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.team_top_side} ${styles.team_top_R} col-lg-2 col-md-2 col-sm-12 col-xs-12`}
                >
                  <div
                    className={`${styles.bg}`}
                    style={{
                      background: `url(${team.teamImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>

              <ul>
                <li>
                  <a
                    href={`tel:${team.teamPhone}`}
                    className={`${styles.phone} orientation-change-element half-second`}
                  >
                    {team.teamPhone}
                  </a>
                </li>

                <li>
                  <a
                    href={`sms:${team.teamPhone}`}
                    className={`${styles.text_me} orientation-change-element half-second`}
                  >
                    <span>Message Me</span>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

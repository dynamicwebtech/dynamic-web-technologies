/**
 *
 *  This is the About Team
 *
 */

import styles from "../../../styles/modules/About/About.module.css";

export const AboutTeam = () => {
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
      teamImg: COLLIN_PIC,
    },
    {
      teamID: "T_2",
      teamName: "Parker Phelps",
      teamRole: "(Co-Owner/Lead Developer)",
      teamImg: PARKER_PIC,
    },
  ];

  return (
    <section id="aboutTeam" className={`${styles.about_team}`}>
      <div className={`${styles.about_team_inner}`}>
        <h2 className="orientation-change-element half-second">
          Meet Our Team
        </h2>

        <div className={`${styles.about_team_inner_box} container-fluid`}>
          <div className={`${styles.about_team_inner_row} row`}>
            {TEAM.map((team) => (
              <div
                key={team.teamID}
                className={`${styles.team} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.team_inner}`}>
                  <div
                    className={`${styles.bg}`}
                    style={{
                      background: `url(${team.teamImg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <div className={`${styles.text}`}>
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

                    <a
                      href="/book_contact#contactInfo"
                      className="orientation-change-element half-second"
                    >
                      <span>Get In Touch</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

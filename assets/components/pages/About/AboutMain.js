/**
 *
 *  This is the About Main
 *
 */

import { BACKGROUND_BG, GOALS_BG, ACHIEVEMENTS_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutMain = () => {
  return (
    <section id="aboutMain" className={`${styles.about_main}`}>
      <div className={`${styles.about_main_inner}`}>
        <div className={`${styles.about_main_inner_box} container-fluid`}>
          <div
            className={`${styles.about_main_inner_row} ${styles.about_background} row`}
          >
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.blue_bar}`} />
              <div className={`${styles.green_bar}`} />

              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${BACKGROUND_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.about_main_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  Our Background.
                </h2>

                <p className="orientation-change-element half-second">
                  Dynamic Web Technologies is a dedicated team of passionate web
                  developers, committed to empowering small businesses by
                  addressing their digital requirements. Established in April
                  2024 by Collin Westgate and Parker Phelps, our inception was
                  driven by a collective observation: numerous small business
                  owners within our community were grappling with inadequate
                  brand representation and visibility, primarily stemming from
                  the absence of a refined, professional online presence.
                  Motivated by this realization, we swiftly acted, founding
                  Dynamic Web Technologies. Our company stands as a beacon of
                  reliability and proficiency, meticulously focused on
                  propelling your success.
                </p>

                <a
                  href="/book_contact#bookForm"
                  className="orientation-change-element half-second"
                >
                  <span>Book A Project</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${styles.about_main_inner_row} ${styles.about_goals} row`}
          >
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_MOBILE_SIDE} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
            >
              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${GOALS_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_L} order-lg-0 order-md-0 order-sm-1 order-1 col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.about_main_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  Our Goals.
                </h2>

                <p className="orientation-change-element half-second">
                  At Dynamic Web Technologies, our primary objective is to
                  deliver unparalleled service excellence to our clients. We are
                  dedicated to identifying optimal solutions tailored to address
                  your unique challenges effectively. With a commitment to
                  affordability without compromising on quality, each webpage
                  crafted by our team embodies excellence. Our aspiration is to
                  become an indispensable partner in fostering the sustained
                  success of your business.
                </p>

                <a
                  href="/book_contact#bookForm"
                  className="orientation-change-element half-second"
                >
                  <span>Book A Project</span>
                </a>
              </div>
            </div>
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_R} order-lg-1 order-md-1 order-sm-0 order-0 col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${GOALS_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
          <div
            className={`${styles.about_main_inner_row} ${styles.about_achievements} row`}
          >
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${ACHIEVEMENTS_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className={`${styles.green_bar}`} />
              <div className={`${styles.blue_bar}`} />
            </div>
            <div
              className={`${styles.about_main_inner_side} ${styles.about_main_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.about_main_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  Our Achievements.
                </h2>

                <p className="orientation-change-element half-second">
                  Despite our brief tenure, we have successfully assisted
                  numerous small businesses and professionals in establishing
                  their digital footprint. This achievement stands as a
                  testament to our unwavering commitment to delivering
                  unparalleled customer service, which lies at the heart of our
                  core values. We firmly believe that our company possesses the
                  capability to support your business irrespective of its stage,
                  whether you're a startup or a well-established entity. Rest
                  assured; we are equipped to cater to your needs
                  comprehensively.
                </p>

                <a
                  href="/book_contact#bookForm"
                  className="orientation-change-element half-second"
                >
                  <span>Book A Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

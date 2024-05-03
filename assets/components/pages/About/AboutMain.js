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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac libero vel nisi fermentum rutrum. Mauris ac est vitae lorem
                  vehicula bibendum. Fusce sit amet libero id nulla luctus
                  consectetur. In hac habitasse platea dictumst. Integer ut ante
                  a magna commodo fermentum. Donec eleifend tortor ut purus
                  vehicula, quis eleifend mauris placerat. Nullam faucibus
                  ullamcorper quam nec ultrices.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac libero vel nisi fermentum rutrum. Mauris ac est vitae lorem
                  vehicula bibendum. Fusce sit amet libero id nulla luctus
                  consectetur. In hac habitasse platea dictumst. Integer ut ante
                  a magna commodo fermentum. Donec eleifend tortor ut purus
                  vehicula, quis eleifend mauris placerat. Nullam faucibus
                  ullamcorper quam nec ultrices.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac libero vel nisi fermentum rutrum. Mauris ac est vitae lorem
                  vehicula bibendum. Fusce sit amet libero id nulla luctus
                  consectetur. In hac habitasse platea dictumst. Integer ut ante
                  a magna commodo fermentum. Donec eleifend tortor ut purus
                  vehicula, quis eleifend mauris placerat. Nullam faucibus
                  ullamcorper quam nec ultrices.
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

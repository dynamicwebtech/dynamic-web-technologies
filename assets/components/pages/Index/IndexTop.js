/**
 *
 *  This is the Index Top
 *
 */

import { useState } from "react";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const MAIN_HEADING = HeadingElement(
    "Empowering Dreams,",
    "Engineering Tomorrow."
  );

  const VIDEO =
    "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/videos/index-top-video.mp4";

  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  const handleVideoPlayed = () => {
    setIsVideoEnded(false);
  };

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      {/**<div className={`${styles.bg}`} />*/}{" "}
      <video
        src={VIDEO}
        muted
        autoPlay
        loop
        onEnded={handleVideoEnded}
        onPlay={handleVideoPlayed}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime >= e.currentTarget.duration - 3) {
            e.currentTarget.currentTime = 0;
          }
        }}
      ></video>{" "}
      {/** */}
      <div className={`${styles.index_top_overlay}`}>
        <div className={`${styles.index_top_overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            {MAIN_HEADING}
          </h1>

          <p className="orientation-change-element half-second">
            At DynamicWebTechnologies, nestled in the heart of vibrant North
            Carolina, we're dedicated to crafting websites that illuminate your
            brand's brilliance. With dependable support and unbeatable prices,
            we're your dream web design agency.
          </p>

          <ul>
            <li>
              <a
                href="/book_contact#bookForm"
                className={`${styles.book_link} orientation-change-element half-second`}
              >
                <span>Book A Project</span>
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className={`${styles.pricing_link} orientation-change-element half-second`}
              >
                <span>View Pricing</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

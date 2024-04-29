/**
 *
 *  This is the Index Top
 *
 */

import { useState, useEffect, useRef } from "react";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const MAIN_HEADING = HeadingElement(
    "Empowering Dreams,",
    "Engineering Tomorrow."
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  const PUBLIC_INDEX_TOP_VIDEO = "/videos/index-top-video.mp4";

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      {/***/}

      <video
        ref={videoRef}
        // controls
        muted
        loop
        autoPlay
        preload="metadata"
        style={{ display: !isLoaded ? "block" : "none" }}
      >
        <source src={PUBLIC_INDEX_TOP_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/** <video
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
      ></video>*/}
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

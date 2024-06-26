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

  // Video stuff
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
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

  const handleVideoEnded = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0;
    // fadeOutOverlay();
  };

  const handleVideoPlayed = () => {
    setIsPlaying(true);
    // fadeInOverlay();
  };

  const fadeInOverlay = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
    }
  };

  const fadeOutOverlay = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
    }
  };

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
        onEnded={handleVideoEnded}
        onPlay={handleVideoPlayed}
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
        <div
          // ref={overlayRef}
          className={`${styles.index_top_overlay_cnt}`}
          // style={{ opacity: "0", transition: "opacity 0.5s ease" }}
        >
          <h1 className="orientation-change-element half-second">
            {MAIN_HEADING}
          </h1>

          <p className="orientation-change-element half-second">
            At Dynamic Web Technologies, nestled in Winston-Salem, NC, we
            illuminate your brand's brilliance with unbeatable web design and
            support. Let us be your dream web design agency, delivering
            excellence at every step.
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
                <span>View Plans</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

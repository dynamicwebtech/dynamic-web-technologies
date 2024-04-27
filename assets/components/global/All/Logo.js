/**
 *
 *  This is the Logo
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { NAV_LOGO, FOOTER_LOGO } from "@/assets/cdns/CDNImgs";

import nav_styles from "../../../styles/modules/Nav/Nav.module.css";
import footer_styles from "../../../styles/modules/Footer/Footer.module.css";

export const Logo = (props) => {
  let isNav = props.isNav;

  return isNav ? (
    <a href="/" className={`${nav_styles.logo}`}>
      <LazyLoadImage src={NAV_LOGO} alt="Dynamic Web Technologies Logo." />
    </a>
  ) : (
    <a href="/" className={`${footer_styles.logo}`}>
      <LazyLoadImage src={FOOTER_LOGO} alt="Dynamic Web Technologies Logo." />
    </a>
  );
};

/**
 *
 *  This is the CDN for the bgs
 *
 */

import { CDNBGReturn } from "./CDNReturns";

const INDEX_TOP_BG = CDNBGReturn("index", "index-top-bg", "webp");
const BOOK_A_PROJECT_BG = CDNBGReturn("index", "book-a-project", "webp");

const ABOUT_BG = CDNBGReturn("about", "about-bg", "webp");
const ACHIEVEMENTS_BG = CDNBGReturn("about", "achievements-bg", "webp");
const BACKGROUND_BG = CDNBGReturn("about", "background-bg", "webp");
const GOALS_BG = CDNBGReturn("about", "goals-bg", "webp");

const PORTFOLIO_BG = CDNBGReturn("portfolio", "portfolio-bg", "webp");

const PRICING_TOP_BG = CDNBGReturn("pricing", "pricing-top-bg", "webp");

const SERVICES_TOP_BG = CDNBGReturn("services", "services-top-bg", "webp");
const BUSINESS_EMAILS = CDNBGReturn("services", "business-emails", "webp");
const LOGO_MAKING = CDNBGReturn("services", "logo-making", "webp");
const WEBSITE_CREATION = CDNBGReturn("services", "website-creation", "jpg");
const RESPONSIVE_DESIGN = CDNBGReturn("services", "responsive-design", "webp");
const SHOPIFY_WEBSITES = CDNBGReturn("services", "shopify-websites", "webp");
const CONTENT_WRITING = CDNBGReturn("services", "content-writing", "webp");

const BOOK_CONTACT_BG = CDNBGReturn("book-contact", "contact-bg", "webp");

export { INDEX_TOP_BG, BOOK_A_PROJECT_BG };
export { ABOUT_BG, ACHIEVEMENTS_BG, BACKGROUND_BG, GOALS_BG };
export { PORTFOLIO_BG };
export { PRICING_TOP_BG };
export {
  SERVICES_TOP_BG,
  BUSINESS_EMAILS,
  LOGO_MAKING,
  WEBSITE_CREATION,
  RESPONSIVE_DESIGN,
  SHOPIFY_WEBSITES,
  CONTENT_WRITING,
};
export { BOOK_CONTACT_BG };

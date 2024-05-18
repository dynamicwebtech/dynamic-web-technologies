/**
 *
 *  This is the Pricing Packages
 *
 */

import styles from "../../../styles/modules/Pricing/Pricing.module.css";

export const PricingPackages = () => {
  const PRICING_PLANS = [
    {
      planID: "P_1",
      planName: "Starter",
      planDesc:
        "The Starter package is the best option for those who want to gain the most bang for their buck. We will supply you with a 1-2 page website (either that be WordPress) along with a professional business email!",
      planPrice: 499,
      planHostingPrice: 29.99,
      planIncluded: [
        // "1 Month Free Hosting!",
        "WordPress",
        "1-2 Pages",
        "Responsive Design",
      ],
      hostingIncluded: [
        "5 Annual Revisions",
        "Web Maintenance",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
    {
      planID: "P_2",
      planName: "Basic",
      planDesc:
        "The Basic package will give you the best of both worlds (starter and professional). We will supply you with a 4 page website (either WordPress, Shopify) along with a professionally made logo for your website as well as a business email!",
      planPrice: 999,
      planHostingPrice: 39.99,
      planIncluded: [
        // "1 Month Free Hosting!",
        "4 Pages",
        "WordPress or Shopify",
        "Website Logo",
        "Shopify Option * $59.99/month *",
      ],
      hostingIncluded: [
        "10 Annual Revisions",
        "Web Maintenance",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
    {
      planID: "P_3",
      planName: "Professional",
      planDesc:
        "The Professional package will give your company the best start for its success. We will supply you with a 5-6 page website (either WordPress, Shopify or Handcoded) along with a logo and business email. You will also get 1 full free month of hosting!",
      planPrice: 1499,
      planHostingPrice: 39.99,
      planIncluded: [
        "1 Month Free Hosting!",
        "5-6 Pages",
        "Website Logo",
        //"Content Writing",
        "SEO",
        "Shopify Option * $49.99/month *",
      ],
      hostingIncluded: [
        "15 Annual Revisions",
        "Web Maintenance",
        "Content Management System",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
    {
      planID: "P_4",
      planName: "Enterprise",
      planDesc:
        "The Enterprise package, designed to kickstart your journey to success. Gain access to a dynamic 6-10 page website, built on either WordPress, Shopify, or meticulously handcrafted coding. Enhance your brand presence with a bespoke logo and dedicated business email. Plus, enjoy the advantage of 2 months of complimentary hosting!",
      planPrice: 2499 + "+",
      planHostingPrice: 39.99,
      planIncluded: [
        "2 Month Free Hosting!",
        "6-10 Pages",
        "Website Logo",
        "SEO",
        "Shopify Option * $44.99/month *",
      ],
      hostingIncluded: [
        "Unlimited Revisions",
        "Web Maintenance",
        "Content Management System",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
  ];

  return (
    <section id="pricingPackages" className={`${styles.pricing_packages}`}>
      <div className={`${styles.pricing_packages_inner}`}>
        {PRICING_PLANS.map((plan) => (
          <div key={plan.planID} className={`${styles.pricing_package}`}>
            <div className={`${styles.pricing_package_box} container-fluid`}>
              <div className={`${styles.pricing_package_row} row`}>
                <div
                  className={`${styles.pricing_package_side} ${styles.pricing_package_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.pricing_package_side_cnt}`}>
                    <div className={`${styles.pricing_package_side_cnt_text}`}>
                      <span
                        className={`${styles.plan_name} orientation-change-element half-second`}
                      >
                        {plan.planName}
                      </span>

                      <span
                        className={`${styles.plan_price} orientation-change-element half-second`}
                      >
                        ${plan.planPrice}
                      </span>

                      <span
                        className={`${styles.plan_hosting_price} orientation-change-element half-second`}
                      >
                        <span>Hosting:</span>${plan.planHostingPrice}/month
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.pricing_package_side} ${styles.pricing_package_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.pricing_package_side_cnt}`}>
                    <p className="orientation-change-element half-second">
                      {plan.planDesc}
                    </p>

                    <span
                      className={`${styles.included_heading} orientation-change-element half-second`}
                    >
                      Included in Plan:
                    </span>

                    <ul className={`${styles.included_list}`}>
                      {plan.planIncluded.map((item) => (
                        <li>
                          <span className="orientation-change-element half-second">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <span
                      className={`${styles.included_heading} orientation-change-element half-second`}
                    >
                      Included in Hosting:
                    </span>

                    <ul className={`${styles.included_list}`}>
                      {plan.hostingIncluded.map((item) => (
                        <li>
                          <span className="orientation-change-element half-second">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className={`${styles.links_list}`}>
                      <li>
                        <a
                          href="/book_contact#bookForm"
                          className={`${styles.booking_link} orientation-change-element half-second`}
                        >
                          <span>Book A Project</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/book_contact#contactInfo"
                          className={`${styles.contact_link} orientation-change-element half-second`}
                        >
                          <span>Call/Text Us</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

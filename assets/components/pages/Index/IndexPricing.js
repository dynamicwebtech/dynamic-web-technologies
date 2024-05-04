/**
 *
 *  This is the Index Pricing
 *
 */

import { FaChevronRight } from "react-icons/fa";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexPricing = () => {
  const PRICING_PLANS = [
    {
      planID: "P_1",
      planName: "Starter",
      planPrice: 399,
      planHostingPrice: 29.99,
      planIncluded: [
        "1 Month Free Hosting!",
        "WordPress or Shopify",
        "1-2 Pages",
        "Responsive Design",
        "Business Email",
        "24/7 Support",
      ],
      hostingIncluded: ["5 Annual Revision", "Web Maintenance"],
      planLink: "/pricing#starter",
    },
    {
      planID: "P_2",
      planName: "Basic",
      planPrice: 799,
      planHostingPrice: 29.99,
      planIncluded: [
        "2 Month Free Hosting!",
        "3-5 Pages",
        "WordPress or Shopify or Hand Coded",
        "Everything Starter offers",
        "Website Logo",
        "24/7 Support",
        "Shopify Option For Additional Fee",
      ],
      hostingIncluded: ["8 Annual Revision", "Web Maintenance"],
      planLink: "/pricing#basic",
    },
    {
      planID: "P_3",
      planName: "Professional",
      planPrice: 1499,
      planHostingPrice: 29.99,
      planIncluded: [
        "3 Month Free Hosting!",
        "5+ Pages",
        "Everything Basic offers",
        //"Content Writing",
        "24/7 Support",
        "Shopify Option For NO Additional Fee",
        "⠀⠀",
      ],
      hostingIncluded: ["Unlimited Revisions", "Web Maintenance"],
      planLink: "/pricing#professional",
    },
  ];

  const ADD_ONS = [
    {
      addOnID: "AO_1",
      addOnName: "Logo Making",
      addOnPrice: 99,
    },
    {
      addOnID: "AO_2",
      addOnName: "Business Email",
      addOnPrice: 23,
    },
    // {
    //   addOnID: "AO_3",
    //   addOnName: "Content Writing",
    //   addOnPrice: 24,
    // },
  ];

  return (
    <section id="indexPricing" className={`${styles.index_pricing}`}>
      <div className={`${styles.index_pricing_inner}`}>
        <div className={`${styles.index_pricing_inner_top}`}>
          <div className={`${styles.index_pricing_inner_top_cnt}`}>
            <h2>Our Project Pricing.</h2>
            <p className="orientation-change-element half-second">
              At Dynamic Web Technologies, our pricing is not just competitive;
              it's among the best in all of North Carolina. Contact us today to
              discover unbeatable value for your web design needs!
            </p>
            <a
              href="/pricing"
              className="orientation-change-element half-second"
            >
              <span>Learn More</span>
              <FaChevronRight className={`${styles.icon}`} />
            </a>
          </div>
        </div>

        <div className={`${styles.index_pricing_inner_main}`}>
          <div className={`${styles.index_pricing_main_inner}`}>
            <div
              className={`${styles.index_pricing_main_inner_box} container-fluid`}
            >
              <div className={`${styles.index_pricing_main_inner_row} row`}>
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.planID}
                    className={`${styles.pricing_plan} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.pricing_plan_inner}`}>
                      <div className={`${styles.pricing_plan_inner_cnt}`}>
                        <span
                          className={`${styles.plan_type} orientation-change-element half-second`}
                        >
                          {plan.planName}
                        </span>
                        <span
                          className={`${styles.plan_price} orientation-change-element half-second`}
                        >
                          ${plan.planPrice}
                        </span>

                        <span
                          className={`${styles.hosting_price} orientation-change-element half-second`}
                        >
                          Hosting: ${plan.planHostingPrice}/month
                        </span>

                        <span
                          className={`${styles.included_heading} orientation-change-element half-second`}
                        >
                          Included in Plan
                        </span>

                        <ul>
                          {plan.planIncluded.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>

                        <span
                          className={`${styles.included_heading} orientation-change-element half-second`}
                        >
                          Included in Hosting
                        </span>

                        <ul>
                          {plan.hostingIncluded.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>

                        <a
                          href={`/pricing#${plan.planLink}`}
                          className="orientation-change-element half-second"
                        >
                          <span>Learn More</span>
                          <FaChevronRight className={`${styles.icon}`} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.index_pricing_inner_add_ons}`}>
          <div className={`${styles.index_pricing_inner_add_ons_inner}`}>
            <h2 className="orientation-change-element half-second">
              Additional Add-Ons.
            </h2>

            <div
              className={`${styles.index_pricing_inner_add_ons_inner_box} container-fluid`}
            >
              {ADD_ONS.map((aO) => (
                <div key={aO.addOnID} className={`${styles.add_on} row`}>
                  <div
                    className={`${styles.add_on_side} ${styles.add_on_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                  >
                    <span className="orientation-change-element half-second">
                      {aO.addOnName}
                    </span>
                  </div>
                  <div
                    className={`${styles.add_on_side} ${styles.add_on_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                  >
                    <span className="orientation-change-element half-second">
                      ${aO.addOnPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

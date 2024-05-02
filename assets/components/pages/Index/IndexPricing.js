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
      planPrice: 389.99,
      planHostingPrice: 35.0,
      planIncluded: [
        "1 Month Free Hosting!",
        "Responsive Design",
        "1-2 Pages",
        "Business Email",
        "Full Creative Control",
        "24/7 Support",
      ],
      planLink: "/pricing#starter",
    },
    {
      planID: "P_2",
      planName: "Basic",
      planPrice: 769.99,
      planHostingPrice: 40.0,
      planIncluded: [
        "2 Month Free Hosting!",
        "Responsive Design",
        "3-5 Pages",
        "Website Logo",
        "Business Email",
        "Full Creative Control",
        "24/7 Support",
      ],
      planLink: "/pricing#basic",
    },
    {
      planID: "P_3",
      planName: "Professional",
      planPrice: 1159.99,
      planHostingPrice: 45.0,
      planIncluded: [
        "3 Month Free Hosting!",
        "Responsive Design",
        "5+ Pages",
        "Website Logo",
        "Business Email",
        "Content Writing",
        "Full Creative Control",
        "24/7 Support",
      ],
      planLink: "/pricing#professional",
    },
  ];

  return (
    <section id="indexPricing" className={`${styles.index_pricing}`}>
      <div className={`${styles.index_pricing_inner}`}>
        <div className={`${styles.index_pricing_inner_top}`}>
          <div className={`${styles.index_pricing_inner_top_cnt}`}>
            <h2>Our Project Pricing.</h2>
            <p className="orientation-change-element half-second">
              At DynamicWebTechnologies, our pricing is not just competitive;
              it's among the best in all of North Carolina. Plus, it's highly
              negotiable based on the project scope. Contact us today to
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
          {PRICING_PLANS.map((plan) => (
            <div key={plan.planID} className={`${styles.pricing_plan}`}>
              <div className={`${styles.pricing_plan_inner}`}>
                <div
                  className={`${styles.pricing_plan_inner_box} container-fluid`}
                >
                  <div className={`${styles.pricing_plan_inner_row} row`}>
                    <div
                      className={`${styles.pricing_plan_inner_side} ${styles.pricing_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                    >
                      <div className={`${styles.pricing_plan_inner_side_cnt}`}>
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
                      </div>
                    </div>
                    <div
                      className={`${styles.pricing_plan_inner_side} ${styles.pricing_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                    >
                      <div className={`${styles.pricing_plan_inner_side_cnt}`}>
                        <span
                          className={`${styles.included_heading} orientation-change-element half-second`}
                        >
                          What is included?
                        </span>

                        <ul>
                          {plan.planIncluded.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

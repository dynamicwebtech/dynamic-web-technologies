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
      planDesc:
        "The Starter package is the best option for those who want to gain the most bang for their buck. We will supply you with a 1 page website (either that be WordPress) along with a professional business email!",
      planPrice: 499,
      planHostingPrice: 29.99,
      planIncluded: [
        // "1 Month Free Hosting!",
        "1 Page",
        "WordPress",
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
        "The Basic package will give you the best of both worlds (starter and professional). We will supply you with a 3-page website (either WordPress or Shopify) along with a professionally made logo for your website as well as a business email!",
      planPrice: 999,
      planHostingPrice: 39.99,
      planIncluded: [
        // "1 Month Free Hosting!",
        "3 Pages",
        "WordPress or Shopify",
        "Website Logo",
        "Content Management System",
        "Shopify Option",
        // "Shopify Option * $59.99/month *",
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
        "The Professional package will give your company the best start for its success. We will supply you with a 6-page website (either WordPress or Shopify) along with a logo and business email!",
      planPrice: 1499,
      planHostingPrice: 39.99,
      planIncluded: [
        "6 Pages",
        "WordPress or Shopify",
        "1 Month Free Hosting!",
        "Website Logo",
        "Content Management System",
        //"Content Writing",
        "SEO",
        "Shopify Option",
        // "Shopify Option * $59.99/month *",
      ],
      hostingIncluded: [
        "10 Annual Revisions",
        "Web Maintenance",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
    {
      planID: "P_4",
      planName: "Enterprise",
      planDesc:
        "The Enterprise package, designed to kickstart your journey to success. Gain access to a dynamic 10-page website, built on either WordPress, Shopify, or meticulously handcrafted coding. Enhance your brand presence with a bespoke logo and dedicated business email. Plus, enjoy the advantage of two months of complimentary hosting!",
      planPrice: 2499 + "+",
      planHostingPrice: 39.99,
      planIncluded: [
        "10 Pages",
        "WordPress, Shopify or Hand-coded",
        "2 Month Free Hosting!",
        "Website Logo",
        "SEO",
        "Content Writing",
        "Content Management System",
        "Shopify Option",
        // "Shopify Option * $59.99/month *",
      ],
      hostingIncluded: [
        "10 Annual Revisions",
        "Web Maintenance",
        "Business Email",
        "Reliable Customer Support",
      ],
    },
  ];

  const ADD_ONS = [
    {
      addOnID: "AO_1",
      addOnName: "Logo Making",
      addOnDesc:
        "We can provide you with a very high-quality, professional-looking logo that fits your business.",
      // addOnPrice: 99.99,
    },
    {
      addOnID: "AO_2",
      addOnName: "Business Email",
      addOnDesc:
        "Business emails are always a good choice to show professionalism when starting a business. Let us help you get one!",
      // addOnPrice: 23.99 + "/month",
    },
    {
      addOnID: "AO_3",
      addOnName: "Additional Page(s)",
      addOnDesc:
        "We can provide you with more pages than what our packages offer for a additional fee per page.",
      // addOnPrice: 149.99,
    },
    {
      addOnID: "AO_4",
      addOnName: "SEO",
      addOnDesc:
        "We can provide you with eyes on your website with our high quality Search Engine Optimization tactics.",
      // addOnPrice: 149.99,
    },
    {
      addOnID: "AO_5",
      addOnName: "Content Writing",
      addOnDesc:
        "Our team of expert writers will provide your website with some of the best on-screen content related to your brand.",
      // addOnPrice: 149.99,
    },
  ];

  return (
    <section id="indexPricing" className={`${styles.index_pricing}`}>
      <div className={`${styles.index_pricing_inner}`}>
        <div className={`${styles.index_pricing_inner_top}`}>
          <div className={`${styles.index_pricing_inner_top_cnt}`}>
            <h2>Our Project Plans.</h2>
            <p className="orientation-change-element half-second">
              At Dynamic Web Technologies, our plans are not just competitive;
              they are among the best in all of Winston-Salem, NC. Contact us
              today to discover unbeatable value for your web design needs!
            </p>
            <a
              href="/book_contact#contactForm"
              className="orientation-change-element half-second"
            >
              <span>Reach Out</span>
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
                    className={`${styles.pricing_plan} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.pricing_plan_inner}`}>
                      <div className={`${styles.pricing_plan_inner_cnt}`}>
                        <span
                          className={`${styles.plan_price} orientation-change-element half-second`}
                        >
                          {plan.planName}
                        </span>
                        {/**
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
                        */}

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
                          href={`/pricing`}
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
              Additional Services.
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
                      {/** ${aO.addOnPrice} */}
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

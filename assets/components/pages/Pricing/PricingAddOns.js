/**
 *
 *  This is the Pricing Add Ons
 *
 */

import styles from "../../../styles/modules/Pricing/Pricing.module.css";

export const PricingAddOns = () => {
  const ADD_ONS = [
    {
      addOnID: "AO_1",
      addOnName: "Logo Making",
      addOnDesc:
        "We can provide you with a very high-quality, professional-looking logo that fits your business.",
      addOnPrice: 99.99,
    },
    {
      addOnID: "AO_2",
      addOnName: "Business Email",
      addOnDesc:
        "Business emails are always a good choice to show professionalism when starting a business. Let us help you get one!",
      addOnPrice: 23.99 + "/month",
    },
    // {
    //   addOnID: "AO_3",
    //   addOnName: "Content Writing",
    //   addOnPrice: 24,
    // },
  ];

  return (
    <section id="pricingAddOns" className={`${styles.pricing_add_ons}`}>
      <div className={`${styles.pricing_add_ons_inner}`}>
        <h2 className="orientation-change-element half-second">
          Additional Add-ons
        </h2>

        <div className={`${styles.pricing_add_ons_inner_main}`}>
          {ADD_ONS.map((item) => (
            <div
              key={item.addOnID}
              className={`${styles.pricing_add_ons_inner_box} container-fluid`}
            >
              <div className={`${styles.pricing_add_ons_inner_top} row`}>
                <div
                  className={`${styles.pricing_add_ons_inner_top_side} ${styles.pricing_add_ons_top_L} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                >
                  <span
                    className={`${styles.add_on_name} orientation-change-element half-second`}
                  >
                    {item.addOnName}
                  </span>
                </div>
                <div
                  className={`${styles.pricing_add_ons_inner_top_side} ${styles.pricing_add_ons_top_R} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                >
                  <span
                    className={`${styles.add_on_price} orientation-change-element half-second`}
                  >
                    ${item.addOnPrice}
                  </span>
                </div>
              </div>

              <p className="orientation-change-element half-second">
                {item.addOnDesc}
              </p>

              <ul>
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
          ))}
        </div>
      </div>
    </section>
  );
};

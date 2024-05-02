/**
 *
 *  This is the Index Services
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { FaChevronRight } from "react-icons/fa";

import {
  BUSINESS_EMAILS,
  LOGO_MAKING,
  WEBSITE_CREATION,
  RESPONSIVE_DESIGN,
  SHOPIFY_WEBSITES,
  CONTENT_WRITING,
} from "../../../cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexServices = () => {
  const SERVICES = [
    {
      serviceID: "S_1",
      serviceName: "Website Creation",
      serviceImg: WEBSITE_CREATION,
      serviceText:
        "With our extensive experience, we guarantee a high-quality website for your business!",
      serviceLink: "/services#websiteCreation",
    },
    {
      serviceID: "S_2",
      serviceName: "Responsive Design",
      serviceImg: RESPONSIVE_DESIGN,
      serviceText:
        "From smart phones to laptops, we will make sure your website is able to be seen and used on all devices.",
      serviceLink: "/services#responsiveDesign",
    },
    {
      serviceID: "S_3",
      serviceName: "Logo Making",
      serviceImg: LOGO_MAKING,
      serviceText:
        "We can provide you with a very high-quality, professional-looking logo that fits your business.",
      serviceLink: "/services#logoMaking",
    },
    {
      serviceID: "S_4",
      serviceName: "Business Emails",
      serviceImg: BUSINESS_EMAILS,
      serviceText:
        "Business emails are always a good choice to show professionalism when starting a business. Let us help you get one!",
      serviceLink: "/services#businessEmails",
    },
    {
      serviceID: "S_5",
      serviceName: "Shopify Websites",
      serviceImg: SHOPIFY_WEBSITES,
      serviceText:
        "Looking to start an e-commerce website? Let us get you started by providing you with a Shopify website.",
      serviceLink: "/services#shopifyWebsites",
    },
    {
      serviceID: "S_6",
      serviceName: "Content Writing",
      serviceImg: CONTENT_WRITING,
      serviceText:
        "Show your users that you mean business. Let us provide you with high quality content that will grab the readers eye.",
      serviceLink: "/services#contentWriting",
    },
  ];

  return (
    <section id="indexServices" className={`${styles.index_services}`}>
      <div className={`${styles.index_services_inner}`}>
        <div className={`${styles.index_services_inner_top}`}>
          <div className={`${styles.index_services_inner_top_cnt}`}>
            <h2>Our Other Services.</h2>
            <p className="orientation-change-element half-second">
              DynamicWebTechologies offers a lot more than just website
              building. Learn about the other different services we provide
              below.
            </p>
            <a
              href="/services"
              className="orientation-change-element half-second"
            >
              <span>Learn More</span>
              <FaChevronRight className={`${styles.icon}`} />
            </a>
          </div>
        </div>

        <div className={`${styles.index_services_inner_main}`}>
          <div
            className={`${styles.index_services_inner_main_box} container-fluid`}
          >
            <div className={`${styles.index_services_inner_main_row} row`}>
              {SERVICES.map((service) => (
                <div
                  className={`${styles.service} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div className={`${styles.service_inner}`}>
                    <LazyLoadImage
                      style={{ maxWidth: "200px" }}
                      src={service.serviceImg}
                      alt={`DynamicWebTechnologies - ${service.serviceName} Image.`}
                    />

                    <span
                      className={`${styles.service_name} orientation-change-element half-second`}
                    >
                      {service.serviceName}
                    </span>

                    <p className="orientation-change-element half-second">
                      {service.serviceText}
                    </p>

                    <a
                      href={service.serviceLink}
                      className="orientation-change-element half-second"
                    >
                      <span>Learn More</span>
                      <FaChevronRight className={`${styles.icon}`} />
                    </a>
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

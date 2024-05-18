/**
 *
 *  This is the Services Main
 *
 */

import {
  BUSINESS_EMAILS,
  LOGO_MAKING,
  WEBSITE_CREATION,
  RESPONSIVE_DESIGN,
  SHOPIFY_WEBSITES,
  CONTENT_WRITING,
  SEO,
} from "../../../cdns/CDNBgs";

import styles from "../../../styles/modules/Services/Services.module.css";

export const ServicesMain = () => {
  const SERVICES = [
    {
      serviceID: "S_1",
      serviceName: "Website Creation",
      serviceImg: WEBSITE_CREATION,
      serviceDesc:
        "Our main product, and the most important, is our website-building service. Our team has experience building many different types of high-quality websites that will bring your ideas to reality and make your business stand out amongst the crowd.",
    },
    {
      serviceID: "S_2",
      serviceName: "SEO",
      serviceImg: SEO,
      serviceDesc:
        "Our premier SEO service is designed to propel your website to the forefront of search engine results, ensuring that your business gains maximum visibility and attracts a larger audience.",
    },
    {
      serviceID: "S_3",
      serviceName: "Responsive Design",
      serviceImg: RESPONSIVE_DESIGN,
      serviceDesc:
        "Utilizing cutting-edge techniques and responsive design, our team ensures seamless adaptation to diverse mobile devices, ensuring consistent usability and exceptional user experience.",
    },
    {
      serviceID: "S_4",
      serviceName: "Logo Making",
      serviceImg: LOGO_MAKING,
      serviceDesc:
        "Our expert logo designers collaborate closely with you to understand your brand's narrative, values, and audience. We meticulously craft visually striking logos that resonate with your website visitors and customers, leaving a lasting impact.",
    },
    {
      serviceID: "S_5",
      serviceName: "Business Emails",
      serviceImg: BUSINESS_EMAILS,
      serviceDesc:
        "We personalize each email address to reflect your brand identity and boost your online presence. Whether for employees, departments, or specific functions, we offer tailored solutions to meet your needs.",
    },
    {
      serviceID: "S_6",
      serviceName: "Shopify Websites",
      serviceImg: SHOPIFY_WEBSITES,
      serviceDesc:
        "Our experienced Shopify experts collaborate with you to grasp your business goals, target audience, and unique selling points. We utilize Shopify's robust platform to craft a tailored website that effectively showcases your products or services.",
    },
    {
      serviceID: "S_6",
      serviceName: "Content Writing",
      serviceImg: CONTENT_WRITING,
      serviceDesc:
        "Our skilled content writers create engaging content that drives action. From website copy to blog posts, product descriptions, and social media content, we tailor our writing to your brand voice and objectives.",
    },
  ];

  return (
    <section id="servicesMain" className={`${styles.services_main}`}>
      <div className={`${styles.services_main_inner}`}>
        <div className={`${styles.blue_bar}`} />
        <div className={`${styles.green_bar}`} />

        <div className={`${styles.services_main_inner_box} container-fluid`}>
          {SERVICES.map((service) => (
            <div key={service.serviceID} className={`${styles.service} row`}>
              <div
                className={`${styles.service_side} ${styles.service_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div
                  className={`${styles.bg}`}
                  style={{
                    background: `url(${service.serviceImg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div
                className={`${styles.service_side} ${styles.service_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.service_side_cnt}`}>
                  <span
                    className={`${styles.service_name} orientation-change-element half-second`}
                  >
                    {service.serviceName}
                  </span>

                  <p className="orientation-change-element half-second">
                    {service.serviceDesc}
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
                        href="/pricing"
                        className={`${styles.pricing_link} orientation-change-element half-second`}
                      >
                        <span>View Pricing</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.green_bar}`} />
        <div className={`${styles.blue_bar}`} />
      </div>
    </section>
  );
};

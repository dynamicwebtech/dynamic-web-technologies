/**
 *
 *  This is the Blog Post Page
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { AboveNav } from "../../assets/components/global/Nav/AboveNav";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { LoginPopup } from "@/assets/components/global/All/LoginPopup.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

import "../../assets/styles/modules/Blog/Blog.module.css";
import styles from "../../assets/styles/modules/Blog/Blog.module.css";

export default function BlogPost() {
  const router = useRouter();

  const { blogID } = router.query;
  const [blogPost, setBlogPost] = useState(null);

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  // console.log("Admin Mode Status: " + adminMode);
  // console.log("Local Host Status: " + onLocalHost);
  // console.log("Blog ID:", blogID);

  useEffect(() => {
    const fetchData = async () => {
      if (blogID) {
        const fetch_path = `/api/getBlogPosts`;
        try {
          const response = await fetch(fetch_path);

          if (response.ok) {
            const data = await response.json();
            console.log("Fetched Data:", data); // Log fetched data for debugging

            // Getting correct blog post
            const selectedBlogPost = data.find(
              (blogPost) => blogPost.blogID === blogID
            );
            console.log("Selected Blog Post:", selectedBlogPost); // Log selected project for debugging

            setBlogPost(selectedBlogPost);
          } else {
            console.error("Failed to fetch portfolio project.");
          }
        } catch (error) {
          console.error("Error fetching portfolio projects:", error);
        }
      }
    };

    fetchData();
  }, [blogID]);

  // console.log("Blog Post State:", blogPost);

  // console.log(blogPost.blogPostText);

  const deleteBlogPost = async (blogID) => {
    try {
      const RESPONSE = await fetch(`/api/getBlogPosts?blogID=${blogID}`, {
        method: "DELETE",
      });

      if (RESPONSE.ok) {
        console.log("Blog post deleted successfully!");
        router.push("/blog");
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <div id="PAGE">
      {blogPost ? (
        <Head>
          <title>{`DynamicWebTechnologies - ${blogPost.blogPostName}`}</title>

          <meta name="keywords" content="n/a" />
          <meta name="description" content="n/a" />
          <meta name="robots" content="no index, no follow" />
          <link
            rel="canonical"
            href={`https://dynamicwebtechnologies.com/blog/${blogID}`}
          />

          {/** FACEBOOK */}

          <meta
            property="og:title"
            content={`DynamicWebTechnologies - ${blogPost.blogPostName}`}
          />
          <meta name="og:description" content="n/a" />
          <meta
            name="og:url"
            content={`https://dynamicwebtechnologies.com/blog/${blogID}`}
          />
          <meta
            name="og:image"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta
            name="article:author"
            content={"Parker Phelps and Collin Westgate"}
          />
          {/***/}

          {/** LINKEDIN */}
          {/**
      <meta property="og:linkedin" content={props.page_head_data.linkedIn} />
      */}

          <link
            rel="icon"
            type="image/x-icon"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-64x64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-128x128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-192x192.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-32x32.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-310x150.png"
          />
        </Head>
      ) : (
        <Head>
          <title>{`DynamicWebTechnologies - Articles/Blog Post`}</title>

          <meta name="keywords" content="n/a" />
          <meta name="description" content="n/a" />
          <meta name="robots" content="no index, no follow" />
          <link
            rel="canonical"
            href={`https://dynamicwebtechnologies.com/blog/`}
          />

          {/** FACEBOOK */}

          <meta
            property="og:title"
            content={`DynamicWebTechnologies - Articles/Blog Post`}
          />
          <meta name="og:description" content="n/a" />
          <meta
            name="og:url"
            content={`https://dynamicwebtechnologies.com/blog/`}
          />
          <meta
            name="og:image"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta
            name="article:author"
            content={"Parker Phelps and Collin Westgate"}
          />
          {/***/}

          {/** LINKEDIN */}
          {/**
      <meta property="og:linkedin" content={props.page_head_data.linkedIn} />
      */}

          <link
            rel="icon"
            type="image/x-icon"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-64x64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-128x128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/favicon/favicon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/android/android-icon-192x192.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-32x32.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/icons/tab-icons/ms-app/ms-app-icon-310x150.png"
          />
        </Head>
      )}

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      <LoginPopup />
      {adminMode ? <AdminModeIndicator /> : null}

      <div id="PAGE_CNT">
        <div className={`${styles.page_blog_post}`}>
          {blogPost ? (
            <div className={`${styles.blog_post_inner}`}>
              {adminMode ? (
                <button
                  className={`${styles.delete}`}
                  onClick={() => {
                    deleteBlogPost(blogPost.blogID);
                  }}
                >
                  Delete
                </button>
              ) : null}

              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${blogPost.blogPostImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // height: "400px",
                  // width: "400px",
                }}
              />

              <div className={`${styles.blog_post_details}`}>
                <span
                  className={`${styles.post_name} orientation-change-element half-second`}
                >
                  {blogPost.blogPostName}
                </span>
                <span
                  className={`${styles.post_author} orientation-change-element half-second`}
                >
                  {blogPost.blogPostAuthor}
                </span>
                <span
                  className={`${styles.post_creation_date} orientation-change-element half-second`}
                >
                  {blogPost.blogPostCreationDate}
                </span>

                <p className="orientation-change-element half-second">
                  {blogPost.blogPostIntroText}
                </p>
              </div>

              <div className={`${styles.blog_post_text}`}>
                {/** Display each paragraph here */}
                {blogPost.blogPostText
                  .split("/NEW_TEXT/")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="orientation-change-element half-second"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                fontFamily: "Open Sans Semi Bold",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
              className={`${styles.loading_text} orientation-change-element half-second`}
            >
              Loading Blog Post..
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

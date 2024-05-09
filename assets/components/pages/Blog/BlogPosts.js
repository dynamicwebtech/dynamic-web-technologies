/**
 *
 *  This is the Blog Posts
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Blog/Blog.module.css";

export const BlogPosts = ({
  selectedYear,
  selectedReadTime,
  selectedAuthor,
}) => {
  const router = useRouter();
  const { adminMode } = checkAdminModeStatus();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("/api/getBlogPosts");
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } else {
        console.error("Failed to fetch blog posts");
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const calculateReadTime = (numParagraphs) => {
    if (numParagraphs >= 1 && numParagraphs <= 3) {
      return "3-5";
    } else if (numParagraphs >= 4 && numParagraphs <= 6) {
      return "5-8";
    } else if (numParagraphs >= 7 && numParagraphs <= 10) {
      return "8-10";
    } else {
      return "10+";
    }
  };

  const renderBlogPosts = () => {
    // Filter blog posts based on selected options
    let filteredPosts = blogPosts.filter((post) => {
      let yearMatch = true;
      let readTimeMatch = true;
      let authorMatch = true;

      if (selectedYear !== "All") {
        yearMatch =
          new Date(post.blogPostCreationDate).getFullYear() ===
          parseInt(selectedYear);
      }

      if (selectedReadTime !== "All") {
        const numParagraphs = post.blogPostText.split("/NEW_TEXT/").length;
        const postReadTime = calculateReadTime(numParagraphs);
        readTimeMatch = postReadTime === selectedReadTime;
      }

      if (selectedAuthor !== "All") {
        authorMatch = post.blogPostAuthor === selectedAuthor;
      }

      return yearMatch && readTimeMatch && authorMatch;
    });

    return filteredPosts.map((bp) => {
      const paragraphs = bp.blogPostText.split("/NEW_TEXT/");
      const readTime = calculateReadTime(paragraphs.length);

      return (
        <div key={bp.blogID} className={`${styles.blog_post} container-fluid`}>
          <div className={`${styles.blog_post_row} row`}>
            <div
              className={`${styles.blog_post_side} ${styles.blog_post_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div
                className={`${styles.bg}`}
                style={{
                  background: `url(${bp.blogPostImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // height: "400px",
                  // width: "400px",
                }}
              />
            </div>
            <div
              className={`${styles.blog_post_side} ${styles.blog_post_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.blog_post_side_cnt}`}>
                <span
                  className={`${styles.post_name} orientation-change-element half-second`}
                >
                  {bp.blogPostName}
                </span>
                <span
                  className={`${styles.post_author} orientation-change-element half-second`}
                >
                  {bp.blogPostAuthor}
                </span>
                <span
                  className={`${styles.post_creation_date} orientation-change-element half-second`}
                >
                  {bp.blogPostCreationDate}
                </span>

                <p className="orientation-change-element half-second">
                  {bp.blogPostIntroText}
                </p>

                <div className={`${styles.post_link_and_read_time}`}>
                  <span
                    className={`${styles.post_read_time} orientation-change-element half-second`}
                  >
                    {readTime} min read
                  </span>

                  <a
                    href={`/blog/${bp.blogID}`}
                    className="orientation-change-element half-second"
                  >
                    <span>Read</span>
                  </a>
                </div>

                {adminMode ? (
                  <button
                    className={`${styles.delete}`}
                    onClick={() => {
                      deleteBlogPost(bp.blogID);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const deleteBlogPost = async (blogID) => {
    try {
      const RESPONSE = await fetch(`/api/getBlogPosts?blogID=${blogID}`, {
        method: "DELETE",
      });

      if (RESPONSE.ok) {
        console.log("Blog post deleted successfully!");
        window.location.reload();
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <section id="blogPosts" className={`${styles.blog_posts}`}>
      <div className={`${styles.blog_posts_inner}`}>
        {loading ? <p>Loading..</p> : renderBlogPosts()}
      </div>
    </section>
  );
};

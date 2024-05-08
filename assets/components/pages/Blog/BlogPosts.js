/**
 *
 *  This is the Blog Posts
 *
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

import styles from "../../../styles/modules/Blog/Blog.module.css";

export const BlogPosts = () => {
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

  const renderBlogPosts = () => {
    return blogPosts.map((bp) => (
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
                height: "400px",
                width: "400px",
              }}
            />
          </div>
          <div
            className={`${styles.blog_post_side} ${styles.blog_post_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
          >
            <div className={`${styles.blog_post_side_cnt}`}>
              <span>{bp.blogPostName}</span>
              <br />
              <span>{bp.blogPostAuthor}</span>
              <br />
              <span>{bp.blogPostCreationDate}</span>

              <a href={`/blog/${bp.blogID}`}>
                <span>Read</span>
              </a>
              <br />
              <br />
              {adminMode ? (
                <button
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
    ));
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

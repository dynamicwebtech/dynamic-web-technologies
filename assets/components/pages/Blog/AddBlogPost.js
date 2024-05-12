/**
 *
 *  This is the Add Blog Post
 *
 */

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/modules/Blog/Blog.module.css";

export const AddBlogPost = () => {
  const router = useRouter();

  const DATE = new Date();
  const CURRENT_DAY = DATE.getDate();
  const CURRENT_MONTH = DATE.getMonth() + 1;
  const CURRENT_YEAR = DATE.getFullYear();

  const CURRENT_DATE = CURRENT_MONTH + "/" + CURRENT_DAY + "/" + CURRENT_YEAR;

  const [blogID, setBlogID] = useState(
    "BLOGID_" + Math.random().toString(36).substring(2, 10)
  );
  const [blogPostName, setBlogPostName] = useState("");
  const [blogPostNameID, setBlogPostNameID] = useState("");
  const [blogPostIntroText, setBlogPostIntroText] = useState("");
  const [blogPostText, setBlogPostText] = useState([]);
  const [blogPostCreationDate, setBlogPostCreationDate] =
    useState(CURRENT_DATE);
  const [blogPostAuthor, setBlogPostAuthor] = useState("");
  const [blogPostImg, setBlogPostImg] = useState(null);
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

  const checkingForValidInput = (input) => {
    if (
      input.value !== "" &&
      input.value !== null &&
      input.value.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setBlogPostImg(selectedFile);
    e.currentTarget.style.border = "2px solid white";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const BLOG_POST_NAME = document.getElementById("aBPFBlogPostName");
    const CHECKING_BLOG_POST_NAME = checkingForValidInput(BLOG_POST_NAME);

    if (CHECKING_BLOG_POST_NAME) {
      BLOG_POST_NAME.style.border = "2px solid white";
    }

    if (CHECKING_BLOG_POST_NAME) {
      try {
        const formData = new FormData();

        formData.append("blogID", blogID);
        formData.append("blogPostName", blogPostName);
        formData.append("blogPostNameID", blogPostNameID);
        formData.append("blogPostIntroText", blogPostIntroText);
        formData.append("blogPostText", blogPostText.join("\n"));
        formData.append("blogPostCreationDate", CURRENT_DATE);
        formData.append("blogPostAuthor", blogPostAuthor);
        formData.append("blogPostImg", blogPostImg);

        const response = await fetch("/api/getBlogPosts", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Blog Post submitted successfully!");

          setBlogID("BLOGID_" + Math.random().toString(36).substring(2, 10));
          setBlogPostNameID("");
          setBlogPostName("");
          setBlogPostIntroText("");
          setBlogPostText([]);
          setBlogPostCreationDate(CURRENT_DATE);
          setBlogPostAuthor("");
          setBlogPostImg(null);

          fetchBlogPosts();

          router.reload();
        }
      } catch (error) {
        console.error("Error submitting Blog Post:", error);
      }
    } else {
      if (!CHECKING_BLOG_POST_NAME) {
        BLOG_POST_NAME.style.border = "2px solid red";
      }
    }
  };

  const renderBlogPosts = () => {
    return blogPosts.map((post) => (
      <div key={post.blogID} className={`${styles.blog_post}`}>
        <span>Blog Post Name:</span>
        <br />
        <span>{post.blogPostName}</span>
        <br />
        <br />
        <span>Blog Post Author:</span>
        <br />
        <span>{post.blogPostAuthor}</span>
        <br />
        <br />
        <span>Blog Post Creation Date:</span>
        <br />
        <span>{post.blogPostCreationDate}</span>
        <br />
        <br />
        <div
          className={`${styles.bg}`}
          style={{
            background: `url(${post.blogPostImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "400px",
          }}
        />
        <br />
        <br />
        <span>Blog Post Text:</span>
        <p>{parseBlogPostText(post.blogPostText)}</p>
        <br />
        <br />
        <button
          onClick={() => {
            deleteBlogPost(post.blogID);
          }}
        >
          Delete
        </button>
      </div>
    ));
  };

  const parseBlogPostText = (text) => {
    const paragraphs = text.split("/NEW_TEXT/");

    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph}
        <br />
      </React.Fragment>
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
    <section id="addBlogPost" className={`${styles.add_blog_post}`}>
      <div className={`${styles.add_blog_post_inner}`}>
        <br />
        <h1>Add Blog Post</h1>
        <br />

        <form
          onSubmit={handleFormSubmit}
          onReset={() => {
            setBlogID("BLOGID_" + Math.random().toString(36).substring(2, 10));
            setBlogPostNameID("");
            setBlogPostName("");
            setBlogPostIntroText("");
            setBlogPostText("");
            setBlogPostCreationDate("");
            setBlogPostAuthor("");
            setBlogPostText([]);
            setBlogPostImg(null);
          }}
        >
          <div className={`${styles.form_set}`}>
            <span>Blog Post Name:</span>
            <br />
            <input
              className="form-field"
              id="aBPFBlogPostName"
              type="text"
              name="blogPostName"
              placeholder="Blog Post Name"
              value={blogPostName}
              onChange={(e) => {
                const updatedBlogPostName = e.target.value.replace(/["']/g, ""); // Remove quotation marks
                setBlogPostName(updatedBlogPostName);
                setBlogPostNameID(
                  "BPNID_" +
                    updatedBlogPostName.toLowerCase().replace(/[\s,]/g, "")
                );
              }}
            />
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <span>
              Blog Post Intro Text{" "}
              <span style={{ fontWeight: "bold" }}>
                (This is what will appear at the top and act as the blog post's
                description)
              </span>
              :
            </span>
            <br />
            <textarea
              className="form-field"
              id="aBPFBlogPostIntroText"
              name="blogPostIntroText"
              placeholder="Blog Post Intro Text"
              value={blogPostIntroText}
              onChange={(e) => {
                setBlogPostIntroText(e.target.value);
              }}
            />
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <span>
              Blog Post Text{" "}
              <span style={{ fontWeight: "bold" }}>
                (Add "<span style={{ color: "red" }}>/NEW_TEXT/</span>" *
                Forward Slash, NEW_TEXT, Forward Slash * at the end of each
                paragraph to indicate a new one)
              </span>
              :
            </span>
            <br />
            <textarea
              className="form-field"
              id="aBPFBlogPostText"
              name="blogPostText"
              placeholder="Blog Post Text"
              value={blogPostText.join("\n")}
              onChange={(e) => {
                const text = e.target.value;
                const paragraphs = text.split("\n");
                setBlogPostText(paragraphs);
              }}
            />
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <span>Blog Post Author Name:</span>
            <br />
            <input
              className="form-field"
              id="aBPFBlogPostAuthor"
              type="text"
              name="blogPostAuthor"
              placeholder="Blog Post Author Name"
              value={blogPostAuthor}
              onChange={(e) => {
                setBlogPostAuthor(e.target.value);
              }}
            />
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <span>Blog Post Image (ONLY IMAGES):</span>
            <br />
            <input
              className="form-field"
              id="addMediaFile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <br />
          <div className={`${styles.form_btns}`}>
            <button type={"reset"} className={`${styles.reset}`}>
              <span>CLEAR</span>
            </button>

            <button type={"submit"} className={`${styles.send}`}>
              <span>ADD</span>
            </button>
          </div>
        </form>

        {/**
        <div className={`${styles.blog_posts}`}>
          <h2>Blog Posts</h2>

          {loading ? <p>Loading..</p> : renderBlogPosts()}
        </div>
        */}
      </div>
    </section>
  );
};

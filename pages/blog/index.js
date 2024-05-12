// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import axios from "axios";

// Library Imports

// Data/Functions/Images Imports
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { AboveNav } from "../../assets/components/global/Nav/AboveNav";
import { DesktopNav } from "@/assets/components/global/Nav/DesktopNav.js";
import { MobileNav } from "@/assets/components/global/Nav/MobileNav.js";
import { Footer } from "@/assets/components/global/Footer/Footer.js";
import { LoginPopup } from "@/assets/components/global/All/LoginPopup.js";
import { AdminModeIndicator } from "@/assets/components/global/All/AdminModeIndicator.js";

import { TopHero } from "@/assets/components/pages/All/TopHero";
import { AddBlogPost } from "@/assets/components/pages/Blog/AddBlogPost";
import { BlogPosts } from "@/assets/components/pages/Blog/BlogPosts";
import { BlogPostFilters } from "@/assets/components/pages/Blog/BlogPostFilters";

import "../../assets/styles/modules/Blog/Blog.module.css";
import styles from "../../assets/styles/modules/Blog/Blog.module.css";

export async function getServerSideProps({ req }) {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/PageHead/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_BLOG_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Blog.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_BLOG_DATA_FC = fs.readFileSync(PH_BLOG_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_BLOG_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_BLOG_DATA = JSON.parse(PH_BLOG_DATA_FC);

    return {
      props: { PH_ICONS_DATA, PH_BLOG_DATA },
    };
  } catch (error) {
    console.error("Error reading data:", error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_BLOG_DATA: null,
      },
    };
  }
}

export default function Blog({ PH_ICONS_DATA, PH_BLOG_DATA }) {
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);

  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [newBlogPostName, setNewBlogPostName] = useState("");
  const [newBlogPostAuthor, setNewBlogPostAuthor] = useState("");
  const [newBlogPostIntroText, setNewBlogPostIntroText] = useState("");
  const [newBlogPostText, setNewBlogPostText] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedReadTime, setSelectedReadTime] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleReadTimeChange = (e) => {
    setSelectedReadTime(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();

    document.querySelectorAll(".blog-post-filter").forEach((filter) => {
      filter.selectedIndex = 0;
    });

    setSelectedYear("All");
    setSelectedReadTime("All");
    setSelectedAuthor("All");
  };

  const handlePostChange = (e) => {
    setSelectedPost(e.target.value);
  };

  const handleBlogPostDeleteSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Selected post:", selectedPost);

      // Find the selected post data
      const selectedPostData = blogPosts.find(
        (post) => post.blogID === selectedPost
      );
      console.log("Selected post data:", selectedPostData);

      // Change the blogPostName to the input value
      const updatedPostData = {
        ...selectedPostData,
        blogPostName: newBlogPostName,
        blogPostAuthor: newBlogPostAuthor,
        blogPostIntroText: newBlogPostIntroText,
        blogPostText: newBlogPostText.join("\n"),
      };
      console.log("Updated post data:", updatedPostData);

      // Store the updated post data in localStorage
      localStorage.setItem("deletedBlogPost", JSON.stringify(updatedPostData));

      // Call the API endpoint to store data in MongoDB database
      const response = await fetch("/api/insertDeletedBlogPost", {
        method: "POST",
        body: JSON.stringify(updatedPostData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Response:", response);

      if (response.ok) {
        // Blog post data inserted successfully into database
        console.log("Blog post data inserted successfully into database");

        // Delete the old blog post from the database
        const deleteResponse = await fetch(
          `/api/getBlogPosts?blogID=${selectedPostData.blogID}`,
          {
            method: "DELETE",
          }
        );
        console.log("Delete Response:", deleteResponse);

        if (deleteResponse.ok) {
          // Old blog post deleted successfully from database
          console.log("Old blog post deleted successfully from database");

          // Reset selectedPost and newBlogPostName states
          setSelectedPost("");
          setNewBlogPostName("");
          setNewBlogPostAuthor("");
          setNewBlogPostIntroText("");
          setNewBlogPostText([]);

          // You may want to refresh the list of blog posts after inserting and deleting
          fetchBlogPosts();

          window.location.reload();
        } else {
          // Handle error
          console.error("Failed to delete old blog post from database");
        }
      } else {
        // Handle error
        console.error("Failed to insert blog post data into database");
      }
    } catch (error) {
      // Handle error
      console.error("Error deleting blog post:", error);
    }
  };

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

  const TOP_HERO_OBJECT = {
    styles: styles,
    bg: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/blog/blog-top-bg.webp",
    heading: "Articles/Blog.",
    text: "Dynamic Web Technologies is a great source for those who would like to become more familiar with the web development and digital fields. By reading our blog posts, you can get a good idea as to how our services and department operates!",
  };

  return (
    <div id="PAGE" className="page">
      <PageHead page_head_data={PH_BLOG_DATA} icons_data={PH_ICONS_DATA} />

      <AboveNav />
      <DesktopNav />
      <MobileNav />
      <LoginPopup />
      {adminMode ? <AdminModeIndicator /> : null}

      <div id="PAGE_CNT">
        <TopHero object={TOP_HERO_OBJECT} />

        {adminMode ? <AddBlogPost /> : null}

        {adminMode ? (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <span>Edit A Blog Post</span>
            <br />
            <br />
            <select value={selectedPost} onChange={handlePostChange}>
              <option value="">Select a Blog Post</option>
              {/* Map over the fetched blog posts to generate options */}
              {blogPosts.map((post) => (
                <option key={post._id} value={post.blogID}>
                  {post.blogPostName}
                </option>
              ))}
            </select>

            {selectedPost && (
              <form onSubmit={handleBlogPostDeleteSubmit}>
                <span>
                  <strong style={{ color: "red", fontWeight: "bold" }}>
                    NOTE:
                  </strong>
                  You can only make one change submission per post. Afterwards,
                  changing a second time will delete the post. If there is not
                  any data you want to change from the current post, copy and
                  paste the contents into their respected fields.
                </span>
                <br />
                {localStorage.deletedBlogPost &&
                  JSON.parse(localStorage.deletedBlogPost).blogPostName ===
                    blogPosts.find((post) => post.blogID === selectedPost)
                      .blogPostName && (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      WARNING: It has already been changed before. This post
                      will be deleted if changed again!
                    </span>
                  )}
                <br />
                <label>
                  New Blog Post Name:
                  <input
                    type="text"
                    value={newBlogPostName}
                    onChange={(e) => setNewBlogPostName(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  New Blog Post Author:
                  <input
                    type="text"
                    value={newBlogPostAuthor}
                    onChange={(e) => setNewBlogPostAuthor(e.target.value)}
                  />
                </label>

                <br />
                <label>
                  New Blog Post Intro Text:
                  <textarea
                    value={newBlogPostIntroText}
                    onChange={(e) => setNewBlogPostIntroText(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  New Blog Post Text:
                  <textarea
                    value={newBlogPostText.join("\n")}
                    onChange={(e) =>
                      setNewBlogPostText(e.target.value.split("\n"))
                    }
                  />
                </label>

                <br />
                <button type="submit">Edit Selected</button>
              </form>
            )}
          </div>
        ) : null}

        {/**
          <BlogPostFilters />
        */}
        {blogPosts.length > 0 && (
          <BlogPostFilters
            selectedYear={selectedYear}
            selectedReadTime={selectedReadTime}
            selectedAuthor={selectedAuthor}
            onYearChange={handleYearChange}
            onReadTimeChange={handleReadTimeChange}
            onAuthorChange={handleAuthorChange}
            onFiltersReset={handleFiltersReset}
          />
        )}
        {blogPosts.length > 0 && (
          <BlogPosts
            selectedYear={selectedYear}
            selectedReadTime={selectedReadTime}
            selectedAuthor={selectedAuthor}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

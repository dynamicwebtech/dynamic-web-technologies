// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

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

  const TOP_HERO_OBJECT = {
    styles: styles,
    bg: "https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/blog/blog-top-bg.webp",
    heading: "Our Blog.",
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

        {/**
          <BlogPostFilters />
        */}
        <BlogPostFilters
          selectedYear={selectedYear}
          selectedReadTime={selectedReadTime}
          selectedAuthor={selectedAuthor}
          onYearChange={handleYearChange}
          onReadTimeChange={handleReadTimeChange}
          onAuthorChange={handleAuthorChange}
          onFiltersReset={handleFiltersReset}
        />
        <BlogPosts
          selectedYear={selectedYear}
          selectedReadTime={selectedReadTime}
          selectedAuthor={selectedAuthor}
        />
      </div>

      <Footer />
    </div>
  );
}

/**
 *
 *  This is the Blog Post Filters
 *
 */
import { FaFilter } from "react-icons/fa";

import { useBlogPosts } from "@/assets/functions/contexts/blogPostsProvider";

import styles from "../../../styles/modules/Blog/Blog.module.css";

export const BlogPostFilters = ({
  selectedYear,
  selectedReadTime,
  selectedAuthor,
  onYearChange,
  onReadTimeChange,
  onAuthorChange,
  onFiltersReset,
}) => {
  const blogPosts = useBlogPosts();

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

  const years = [
    ...new Set(
      blogPosts.map((bp) => new Date(bp.blogPostCreationDate).getFullYear())
    ),
  ];

  const readTimes = [
    ...new Set(
      blogPosts.map((bp) =>
        calculateReadTime((bp.blogPostText || "").split("/NEW_TEXT/").length)
      )
    ),
  ];

  const authors = [...new Set(blogPosts.map((bp) => bp.blogPostAuthor))];

  return (
    <section id="blogPostFilters" className={`${styles.blog_post_filters}`}>
      <div className={`${styles.blog_post_filters_inner}`}>
        <div
          className={`${styles.blog_post_filters_inner_box} container-fluid`}
        >
          <div className={`${styles.blog_post_filters_inner_row} row`}>
            <div
              className={`${styles.blog_post_filters_L} ${styles.blog_post_filters_inner_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.blog_post_filters_inner_side_cnt}`}>
                <FaFilter
                  className={`${styles.icon} orientation-change-element half-second`}
                />
                <span className="orientation-change-element half-second">
                  Filters
                </span>
              </div>
            </div>
            <div
              className={`${styles.blog_post_filters_R} ${styles.blog_post_filters_inner_side} col-lg-8 col-md-8 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.blog_post_filters_inner_side_cnt}`}>
                <div className={`${styles.custom_select}`}>
                  <select
                    id="bPFYear"
                    className="blog-post-filter"
                    value={selectedYear}
                    onChange={onYearChange}
                  >
                    <option value="All">By Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.custom_select}`}>
                  <select
                    id="bPFReadTime"
                    className="blog-post-filter"
                    value={selectedReadTime}
                    onChange={onReadTimeChange}
                  >
                    <option value="All">By Read Time</option>
                    {readTimes.map((rT) => (
                      <option key={rT} value={rT}>
                        {rT}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.custom_select}`}>
                  <select
                    id="bPFAuthor"
                    className="blog-post-filter"
                    value={selectedAuthor}
                    onChange={onAuthorChange}
                  >
                    <option value="All">By Author</option>
                    {authors.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  id="bPFReset"
                  className="orientation-change-element half-second"
                  // onClick={(e) => {

                  // }}
                  onClick={onFiltersReset}
                >
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.blue_bar}`} />
        <div className={`${styles.green_bar}`} />
      </div>
    </section>
  );
};

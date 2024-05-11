/**
 *
 *  This is the Index Blog Articles
 *
 */

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexBlogArticles = () => {
  return (
    <section id="indexBlogArticles" className={`${styles.index_blog_articles}`}>
      <div
        className={`${styles.bg}`}
        style={{
          background:
            "url(https://raw.githubusercontent.com/dynamicwebtech/client_CDNS/main/dynamic-web-technologies/bgs/blog/blog-top-bg.webp)",
          backgroundSize: "cover",
          backgroundPostion: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className={`${styles.index_blog_articles_overlay}`}>
        <div className={`${styles.index_blog_articles_overlay_cnt}`}>
          <h2 className="orientation-change-element half-second">
            Read Our Articles/Blog.
          </h2>

          <p className="orientation-change-element half-second">
            Learn about our company via our blog posts and articles on the
            latest news regarding the web development field.
          </p>

          <a href="/blog" className="orientation-change-element half-second">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

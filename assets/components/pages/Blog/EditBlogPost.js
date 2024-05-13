/**
 *
 *  This is the Edit Blog Post
 *
 */

import styles from "../../../styles/modules/Blog/Blog.module.css";

export const EditBlogPost = ({ propertyObject }) => {
  const PO = propertyObject;
  //     selectedPost,
  //   blogPosts,
  //   handleBlogPostDeleteSubmit,
  //   handlePostChange,
  //   setNewBlogPostName,
  //   setNewBlogPostAuthor,
  //   setNewBlogPostIntroText,
  //   setNewBlogPostText,
  //   newBlogPostName,
  //   newBlogPostAuthor,
  //   newBlogPostIntroText,

  const SELECTED_POST = PO.selectedPost;
  const BLOG_POSTS = PO.blogPosts;
  const HANDLE_BLOG_POST_DELETE_SUBMIT = PO.submitFunction;
  const HANDLE_POST_CHANGE = PO.changeFunction;
  const SET_NEW_BLOG_POST_NAME = PO.nameSetter;
  const SET_NEW_BLOG_POST_AUTHOR = PO.authorSetter;
  const SET_NEW_BLOG_POST_INTRO_TEXT = PO.introTextSetter;
  const SET_NEW_BLOG_POST_TEXT = PO.textSetter;
  const NEW_BLOG_POST_NAME = PO.newName;
  const NEW_BLOG_POST_AUTHOR = PO.newAuthor;
  const NEW_BLOG_POST_INTRO_TEXT = PO.newIntroText;
  const NEW_BLOG_POST_TEXT = PO.newText;

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

  return (
    <div className={`${styles.edit_blog_post}`}>
      <h1>Edit A Blog Post</h1>
      <select
        id="editBPSelect"
        value={SELECTED_POST}
        onChange={HANDLE_POST_CHANGE}
      >
        <option value="">Select a Blog Post</option>
        {BLOG_POSTS.map((post) => (
          <option key={post._id} value={post.blogID}>
            {post.blogPostName}
          </option>
        ))}
      </select>

      {SELECTED_POST && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const SELECT = document.getElementById("editBPSelect");

            if (SELECT.selectedIndex !== 0) {
              const EDIT_FIELDS = document.querySelectorAll(".edit-field");

              const VALID_NAME = checkingForValidInput(EDIT_FIELDS[0]);
              const VALID_AUTHOR = checkingForValidInput(EDIT_FIELDS[1]);
              const VALID_INTRO = checkingForValidInput(EDIT_FIELDS[2]);
              const VALID_TEXT = checkingForValidInput(EDIT_FIELDS[3]);

              if (VALID_NAME && VALID_AUTHOR && VALID_INTRO && VALID_TEXT) {
                HANDLE_BLOG_POST_DELETE_SUBMIT;
              }

              if (!VALID_NAME) {
                alert(
                  "Please enter in a new blog post name. Or you can copy/paste the old one."
                );
              }

              if (!VALID_AUTHOR) {
                alert(
                  "Please enter in a new blog post author. Or you can copy/paste the old one."
                );
              }

              if (!VALID_INTRO) {
                alert(
                  "Please enter in a new blog post intro text. Or you can copy/paste the old one."
                );
              }

              if (!VALID_TEXT) {
                alert(
                  "Please enter in a new blog post text. Or you can copy/paste the old one."
                );
              }
            } else {
              alert("Please select a blog post to edit.");
            }
          }}
        >
          {/**
            <span>
              <strong style={{ color: "red", fontWeight: "bold" }}>
                NOTE:
              </strong>{" "}
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
            */}
          <div className={`${styles.form_set}`}>
            <label>
              New Blog Post Name:
              <input
                className="edit-field"
                type="text"
                value={NEW_BLOG_POST_NAME}
                onChange={(e) => SET_NEW_BLOG_POST_NAME(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <label>
              New Blog Post Author:
              <input
                className="edit-field"
                type="text"
                value={NEW_BLOG_POST_AUTHOR}
                onChange={(e) => SET_NEW_BLOG_POST_AUTHOR(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <label>
              New Blog Post Intro Text:
              <textarea
                className="edit-field"
                value={NEW_BLOG_POST_INTRO_TEXT}
                onChange={(e) => SET_NEW_BLOG_POST_INTRO_TEXT(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className={`${styles.form_set}`}>
            <label>
              New Blog Post Text:
              <textarea
                className="edit-field"
                value={NEW_BLOG_POST_TEXT.join("\n")}
                onChange={(e) =>
                  SET_NEW_BLOG_POST_TEXT(e.target.value.split("\n"))
                }
              />
            </label>
          </div>

          <button type="submit">Edit</button>
        </form>
      )}
    </div>
  );
};

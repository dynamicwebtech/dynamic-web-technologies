/**
 *
 *  This is the Blog Post Page
 *
 */

import { useRouter } from "next/router";

import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";

import "../../assets/styles/modules/Blog/Blog.module.css";
import styles from "../../assets/styles/modules/Blog/Blog.module.css";

export const BlogPost = () => {
  const router = useRouter();

  const { blogID } = router.query;
  const [blogPost, setBlogPost] = useState(null);

  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log("Admin Mode Status: " + adminMode);
  console.log("Local Host Status: " + onLocalHost);
  console.log("Item ID:", itemID);

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

            setProject(selectedBlogPost);
          } else {
            console.error("Failed to fetch portfolio project.");
          }
        } catch (error) {
          console.error("Error fetching portfolio projects:", error);
        }
      }
    };

    fetchData();
  }, [itemID]);

  console.log("Project State:", project);

  return <div id="blogPost"></div>;
};

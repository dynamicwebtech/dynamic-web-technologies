/**
 *
 *  This is the fetchReviews async function
 *
 */

const fetchReviews = async (fetch_path, setter, router) => {
  try {
    const response = await fetch(fetch_path);
    if (response.ok) {
      const data = await response.json();
      setter(data);

      // router.reload()
    } else {
      console.error("Failed to fetch reviews");
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

export { fetchReviews };

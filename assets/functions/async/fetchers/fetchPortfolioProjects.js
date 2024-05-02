/**
 *
 *  This is the fetchPortfolioProjects async function
 *
 */

const fetchPortfolioProjects = async (fetch_path, setter) => {
  try {
    const response = await fetch(fetch_path);
    if (response.ok) {
      const data = await response.json();
      setter(data);
    } else {
      console.error("Failed to fetch portfolio projects");
    }
  } catch (error) {
    console.error("Error fetching portfolio projects:", error);
  }
};

export { fetchPortfolioProjects };

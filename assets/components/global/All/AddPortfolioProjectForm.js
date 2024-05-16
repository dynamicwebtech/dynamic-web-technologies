import { useState } from "react";
import { useRouter } from "next/router";

export const AddPortfolioProjectForm = (props) => {
  const STYLES = props.styles;

  const router = useRouter();

  const [itemID, setItemID] = useState(
    "PROJECTID_" + Math.random().toString(36).substring(2, 10)
  );
  const [projectName, setProjectName] = useState("");
  const [projectNameID, setProjectNameID] = useState("");
  const [clientName, setClientName] = useState("");
  const [file, setFile] = useState(null);
  const [clientLogo, setClientLogo] = useState(null);
  // const [creationDate, setCreationDate] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  // const [tools, setTools] = useState([]);
  // const [achievements, setAchievements] = useState([]);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  const fetchPortfolioProjects = async () => {
    try {
      const response = await fetch("/api/getPortfolioProjects");
      if (response.ok) {
        const data = await response.json();
        setPortfolioProjects(data);
      } else {
        console.error("Failed to fetch portfolio projects");
      }
    } catch (error) {
      console.error("Error fetching portfolio projects:", error);
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
    setFile(selectedFile);
    e.currentTarget.style.border = "2px solid white";
  };

  const handleClientLogoChange = (e) => {
    const selectedLogo = e.target.files[0];
    setClientLogo(selectedLogo);
    e.currentTarget.style.border = "2px solid white";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const PROJECT_NAME = document.getElementById("aPPFProjectName");

    const CHECKING_PROJECT_NAME = checkingForValidInput(PROJECT_NAME);

    if (CHECKING_PROJECT_NAME) {
      PROJECT_NAME.style.border = "2px solid white";
    }

    if (CHECKING_PROJECT_NAME && file && clientLogo) {
      try {
        const formData = new FormData();
        formData.append("itemID", itemID);
        formData.append("projectName", projectName);
        formData.append("projectNameID", projectNameID);
        formData.append("clientName", clientName);
        if (file) {
          formData.append("file", file);
        }
        if (clientLogo) {
          formData.append("clientLogo", clientLogo);
        }
        // formData.append("creationDate", creationDate);
        formData.append("demoLink", demoLink);
        formData.append("description", description);
        formData.append("review", review);
        // formData.append("tools", JSON.stringify(tools));
        // formData.append("achievements", JSON.stringify(achievements));

        const response = await fetch("/api/getPortfolioProjects", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Portfolio Project submitted successfully");

          setItemID("PROJECTID_" + Math.random().toString(36).substring(2, 10));
          setProjectNameID("");
          setProjectName("");
          setClientName("");
          setClientLogo(null);
          setFile(null);
          // setCreationDate("");
          setDemoLink("");
          setDescription("");
          setReview("");
          // setTools([]);
          // setAchievements([]);
          fetchPortfolioProjects();
          router.reload();
        }
      } catch (error) {
        console.error("Error submitting Portfolio Project:", error);
      }
    } else {
      if (!CHECKING_PROJECT_NAME) {
        PROJECT_NAME.style.border = "2px solid red";
      }
    }
  };

  return (
    <section
      id="addPortfolioProjectForm"
      className={`${STYLES.add_portfolio_project_form}`}
    >
      <div className={`${STYLES.add_portfolio_project_form_inner}`}>
        <h1>Add Portfolio Project</h1>

        <form
          onSubmit={handleFormSubmit}
          onReset={() => {
            setItemID(
              "PROJECTID_" + Math.random().toString(36).substring(2, 10)
            );
            setProjectName("");
            setProjectNameID("");
            setClientName("");
            setFile(null);
            // setCreationDate("");
            setDemoLink("");
            setDescription("");
            setReview("");
            // setTools([]);
            // setAchievements([]);
          }}
        >
          <div className={`${STYLES.form_set}`}>
            <label>
              Project Name:
              <input
                className="form-field"
                id="aPPFProjectName"
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => {
                  const updatedProjectName = e.target.value.replace(
                    /["']/g,
                    ""
                  ); // Remove quotation marks
                  setProjectName(updatedProjectName);
                  setProjectNameID(
                    "PNID_" +
                      updatedProjectName.toLowerCase().replace(/[\s,]/g, "")
                  );
                }}
              />
            </label>
          </div>
          <div className={`${STYLES.form_set}`}>
            <label>
              Client Name:
              <input
                className="form-field"
                id="aPPFClientName"
                type="text"
                name="clientName"
                placeholder="Client Name"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className={`${STYLES.form_set}`}>
            <label className="orientation-change-element half-second">
              Client Logo (Only images):
              <input
                id="addMediaFile"
                type="file"
                accept="image/*"
                onChange={handleClientLogoChange}
                name="clientLogo"
              />
            </label>
          </div>
          <div className={`${STYLES.form_set}`}>
            <label className="orientation-change-element half-second">
              Project Display (Only images):
              <input
                id="addMediaFile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                name="file"
              />
            </label>
          </div>
          {/**
          <div className={`${STYLES.form_set}`}>
            <span>Creation Date:</span>
            <input
              className="form-field"
              id="aPPFCreationDate"
              type="date"
              name="creationDate"
              value={creationDate}
              onChange={(e) => {
                setCreationDate(e.target.value);
              }}
            />
          </div>
          */}
          <div className={`${STYLES.form_set}`}>
            <label>
              Link To Project:
              <input
                className="form-field"
                id="aPPFDemoLink"
                type="text"
                name="demoLink"
                placeholder="Link To Project"
                value={demoLink}
                onChange={(e) => {
                  setDemoLink(e.target.value);
                }}
              />
            </label>
          </div>
          <div className={`${STYLES.form_set}`}>
            <label>
              Project Description:
              {/**
              <input
              className="form-field"
              id="aPPFDemoLink"
              type="text"
              name="demoLink"
              placeholder="Link To Project"
              value={demoLink}
              onChange={(e) => {
                setDemoLink(e.target.value);
              }}
            />
            */}
              <textarea
                className="form-field"
                id="aPPFDescription"
                name="description"
                placeholder="Project Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
          </div>
          <div className={`${STYLES.form_set}`}>
            <label>
              Client Review:
              <textarea
                className="form-field"
                id="aPPFReview"
                name="review"
                placeholder="Client Review"
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
            </label>
          </div>

          <div className={`${STYLES.form_btns}`}>
            <button type={"reset"}>CLEAR</button>
            <br />
            <button type={"submit"}>ADD</button>
          </div>
        </form>
      </div>
    </section>
  );
};

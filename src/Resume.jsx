import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import NewDoc from "./NewDoc";
import handleError from "./HandleError";

const Resume = () => {
  const componentRef = useRef();
  const fileInputRef = useRef();
  const [previewImage, setPreviewImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [newEducation, setNewEducation] = useState([{ education: "" }]);
  const [newSkills, setNewSkills] = useState([{ skills: "" }]);
  const [newCompanyName, setNewCompanyName] = useState([
    { companyName: "", designation: "", from: "", to: "" },
  ]);
  const [newAchievement, setNewAchievement] = useState([{ achievements: "" }]);
  const [newData, setNewData] = useState([]);
  const [errors, setErrors] = useState({});
  const [newValue, setNewValue] = useState({
    name: "",
    email: "",
    Phone: "",
    addresses: "",
    professionalSummary: "",
  });
  const handleChangeEvent = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleChange = (event) => {
    setNewValue({ ...newValue, [event.target.name]: event.target.value });
  };

  const handleChangeEducation = (i, e) => {
    const educationNewSet = [...newEducation];
    educationNewSet[i][e.target.name] = e.target.value;
    setNewEducation(educationNewSet);
  };

  const handleChangeSkills = (i, e) => {
    const skillsSet = [...newSkills];
    skillsSet[i][e.target.name] = e.target.value;
    setNewSkills(skillsSet);
  };

  const handleChangeCompanyName = (i, e) => {
    const companyNameSet = [...newCompanyName];
    companyNameSet[i][e.target.name] = e.target.value;
    setNewCompanyName(companyNameSet);
  };
  const handleChangeAchievements = (i, e) => {
    const AchievementsSet = [...newAchievement];
    AchievementsSet[i][e.target.name] = e.target.value;
    setNewAchievement(AchievementsSet);
  };
  const handleAddEducation = () => {
    setNewEducation([...newEducation, { education: "" }]);
  };
  const handleDeleteEducation = (i) => {
    const educationNewSet = [...newEducation];
    educationNewSet.splice(i, 1);
    setNewEducation(educationNewSet);
  };

  const handleAddSkills = () => {
    setNewSkills([...newSkills, { skills: "" }]);
  };
  const handleDeleteSkills = (i) => {
    const deleteSkills = [...newSkills];
    deleteSkills.splice(i, 1);
    setNewSkills(deleteSkills);
  };
  const handleAddCompanyName = () => {
    setNewCompanyName([...newCompanyName, { companyName: "" }]);
  };
  const handleDeleteCompanyName = (i) => {
    const deleteCompanyName = [...newCompanyName];
    deleteCompanyName.splice(i, 1);
    setNewCompanyName(deleteCompanyName);
  };
  const handleAddAchievements = () => {
    setNewAchievement([...newAchievement, { achievements: "" }]);
  };
  const handleDeleteAchievements = (i) => {
    const deleteAchievements = [...newAchievement];
    deleteAchievements.splice(i, 1);
    setNewAchievement(deleteAchievements);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(
      handleError(
        newValue,
        newEducation,
        newSkills,
        newCompanyName,
        newAchievement
      )
    );
    if (!previewImage) {
      setErrorMessage("image not selected");
    }

    const updatedValue = Object.assign(newValue, {
      education: newEducation,
      skills: newSkills,
      companyName: newCompanyName,
      achievements: newAchievement,
    });
    setNewData([...newData, updatedValue]);
    setNewValue({
      name: "",
      email: "",
      Phone: "",
      addresses: "",
      professionalSummary: "",
    });
    setNewEducation([{ education: "" }]);

    setNewCompanyName([{ companyName: "", designation: "", from: "", to: "" }]);
    setNewSkills([{ skills: "" }]);
    setNewAchievement([{ achievements: "" }]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="heading-maker">
        <h1>Resume Builder</h1>
      </div>

      <div className="resume-head">
        <div className="resume-maker">
          <form>
            <div className="new-form">
              <div className="main-form">
                <label htmlFor="">Name</label>
                <input
                  className="new-education-input"
                  name="name"
                  value={newValue.name}
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="">Upload image</label>
                <div>
                  <input
                    className="input-differ"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChangeEvent}
                  />

                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="new-second-input-email">
              <div className="main-form">
                <label htmlFor="">Email</label>
                <input
                  className="new-education-input"
                  type="text"
                  name="email"
                  value={newValue.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div className="main-form">
                <label htmlFor="">Phone</label>
                <input
                  className="new-education-input"
                  type="number"
                  name="Phone"
                  value={newValue.Phone}
                  placeholder="Enter your phone"
                  onChange={handleChange}
                />
                {errors.Phone && <p style={{ color: "red" }}>{errors.Phone}</p>}
              </div>
            </div>
            <div className="two-form-set">
              <div className="main-form">
                <label htmlFor="">Addresses</label>
                <textarea
                  className="new-education-input"
                  name="addresses"
                  value={newValue.addresses}
                  placeholder="Enter your address"
                  onChange={handleChange}
                  cols="50"
                  rows="4"
                ></textarea>
                {errors.addresses && (
                  <p style={{ color: "red" }}>{errors.addresses}</p>
                )}
              </div>
            </div>

            <div className="two-form-set">
              <div className="main-form">
                <label htmlFor="">Professional Summary</label>
                <textarea
                  className="new-education-input"
                  name="professionalSummary"
                  value={newValue.professionalSummary}
                  placeholder="Enter your professional summary"
                  onChange={handleChange}
                  cols="50"
                  rows="4"
                ></textarea>
                {errors.professionalSummary && (
                  <p style={{ color: "red" }}>{errors.professionalSummary}</p>
                )}
              </div>
            </div>
            <div className="third-form-set">
              <div className="main-form">
                <div className="fourth-form-set">
                  <div>
                    <label htmlFor="">Education</label>
                    {newEducation.map((element, index) => (
                      <input
                        className="new-education-input"
                        type="text"
                        name="education"
                        value={element.education}
                        placeholder="Enter your qualification "
                        onChange={(e) => handleChangeEducation(index, e)}
                      />
                    ))}
                    {errors.education && (
                      <p style={{ color: "red" }}>{errors.education}</p>
                    )}
                  </div>
                  <div className="add-del-icon">
                    <AddCircleOutlineIcon
                      className="add-icon"
                      onClick={handleAddEducation}
                    />
                    {newEducation?.length > 1 && (
                      <DeleteForeverOutlinedIcon
                        className="delete-icon"
                        onClick={handleDeleteEducation}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="main-form">
                <div className="fourth-form-set">
                  <div>
                    <label htmlFor="">Skills</label>
                    {newSkills.map((element, index) => (
                      <input
                        type="text"
                        name="skills"
                        className="new-education-input"
                        value={element.skills}
                        placeholder="Enter your  skills"
                        onChange={(e) => handleChangeSkills(index, e)}
                      />
                    ))}
                    {errors.skills && (
                      <p style={{ color: "red" }}>{errors.skills}</p>
                    )}
                  </div>
                  <div className="add-del-icon">
                    <AddCircleOutlineIcon
                      className="add-icon"
                      onClick={handleAddSkills}
                    />
                    {newSkills?.length > 1 && (
                      <DeleteForeverOutlinedIcon
                        className="delete-icon"
                        onClick={handleDeleteSkills}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="fifth-form-set">
              <div className="main-form">
                <div className="fourth-form-set">
                  <div>
                    {newCompanyName.map((element, index) => (
                      <>
                        <div className="new-date-set">
                          <div>
                            <label htmlFor="">Company Name</label>
                            <input
                              type="text"
                              name="companyName"
                              className="new-education-input"
                              value={element.companyName}
                              placeholder="Enter your company name"
                              onChange={(e) =>
                                handleChangeCompanyName(index, e)
                              }
                            />
                            {errors.companyName && (
                              <p style={{ color: "red" }}>
                                {errors.companyName}
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="">Designation</label>
                            <input
                              type="text"
                              className="new-education-input"
                              name="designation"
                              value={element.designation}
                              placeholder="Enter your designation"
                              onChange={(e) =>
                                handleChangeCompanyName(index, e)
                              }
                            />
                            {errors.designation && (
                              <p style={{ color: "red" }}>
                                {errors.designation}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="date-input">
                          <div>
                            <label htmlFor="">From</label>
                            <input
                              type="date"
                              name="from"
                              className="new-education-input"
                              value={element.from}
                              onChange={(e) =>
                                handleChangeCompanyName(index, e)
                              }
                            />
                            {errors.from && (
                              <p style={{ color: "red" }}>{errors.from}</p>
                            )}
                          </div>
                          <div className="date-align">
                            <div>
                              <label htmlFor="">To</label>
                              <input
                                type="date"
                                name="to"
                                className="new-education-input"
                                value={element.to}
                                onChange={(e) =>
                                  handleChangeCompanyName(index, e)
                                }
                              />
                              {errors.to && (
                                <p style={{ color: "red" }}>{errors.to}</p>
                              )}
                            </div>
                            <div className="add-del-icon">
                              <AddCircleOutlineIcon
                                className="add-icon"
                                onClick={handleAddCompanyName}
                              />
                              {newCompanyName?.length > 1 && (
                                <DeleteForeverOutlinedIcon
                                  className="delete-icon"
                                  onClick={handleDeleteCompanyName}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sixth-form-set">
              <div className="main-form">
                <div className="fourth-form-set">
                  <div>
                    <label htmlFor="">Achievements</label>
                    {newAchievement.map((element, index) => (
                      <input
                        type="text"
                        className="new-education-input"
                        name="achievements"
                        value={element.achievements}
                        placeholder="Enter your  achievements"
                        onChange={(e) => handleChangeAchievements(index, e)}
                      />
                    ))}
                    {errors.achievements && (
                      <p style={{ color: "red" }}>{errors.achievements}</p>
                    )}
                  </div>
                  <div className="add-del-icon">
                    <AddCircleOutlineIcon
                      className="add-icon"
                      onClick={handleAddAchievements}
                    />
                    {newAchievement?.length > 1 && (
                      <DeleteForeverOutlinedIcon
                        className="delete-icon"
                        onClick={handleDeleteAchievements}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-submit-btn">
              <button
                className="submit-btn"
                type="Submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {Object.keys(errors).length === 0 ? (
          <div className="print-data">
            <NewDoc
              previewImage={previewImage}
              newData={newData}
              ref={componentRef}
            />
            {newData.length > 0 ? (
              <button className="print-button" onClick={handlePrint}>
                Print this out!
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Resume;

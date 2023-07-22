const handleerrors = (
  newValue,
  newEducation,
  newSkills,
  newCompanyName,
  newAchievement
) => {
  const errors = {};
  if (newValue.name === "") {
    errors.name = "Name is required";
  }
  if (newValue.email === "") {
    errors.email = "Email is required";
  }
  if (newValue.addresses === "") {
    errors.addresses = "Address is required";
  }
  if (newValue.Phone === "") {
    errors.Phone = "Phone is required";
  }
  if (newValue.professionalSummary === "") {
    errors.professionalSummary = "Professional Summary is required";
  }

  if (newEducation[0]?.education === "") {
    errors.education = "Education is  required";
  }
  if (newSkills[0]?.skills === "") {
    errors.skills = "Skills is required";
  }
  if (newCompanyName[0]?.companyName === "") {
    errors.companyName = "Company name is required";
  }
  if (newCompanyName[0]?.designation === "") {
    errors.designation = "Designation is required";
  }
  if (newCompanyName[0]?.from === "") {
    errors.from = "From date is required";
  }
  if (newCompanyName[0]?.to === "") {
    errors.to = "To date is required";
  }
  if (newAchievement[0]?.achievements === "") {
    errors.achievements = "Achievements is required";
  }

  return errors;
};
export default handleerrors;

const handleerrors = (
  newValue,
  newEducation,
  newSkills,
  newCompanyName,
  newAchievement
) => {
  const errors = {};
  if (newValue.name === "") {
    errors.name = "name is required";
  }
  if (newValue.email === "") {
    errors.email = "email is required";
  }
  if (newValue.addresses === "") {
    errors.addresses = "address is required";
  }
  if (newValue.Phone === "") {
    errors.Phone = "phone is required";
  }
  if (newValue.professionalSummary === "") {
    errors.professionalSummary = "professional Summary is required";
  }

  if (newEducation[0]?.education === "") {
    errors.education = "education is  required";
  }
  if (newSkills[0]?.skills === "") {
    errors.skills = "skills is required";
  }
  if (newCompanyName[0]?.companyName === "") {
    errors.companyName = "Company name is required";
  }
  if (newCompanyName[0]?.designation === "") {
    errors.designation = "designation is required";
  }
  if (newCompanyName[0]?.from === "") {
    errors.from = "from date is required";
  }
  if (newCompanyName[0]?.to === "") {
    errors.to = " to date is required";
  }
  if (newAchievement[0]?.achievements === "") {
    errors.achievements = "achievements is required";
  }

  return errors;
};
export default handleerrors;

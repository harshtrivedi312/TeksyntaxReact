import React, { useState } from "react";
import NavBar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import emailjs from "@emailjs/browser";

const JobApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    linkedIn: "",
    website: "",
    education: "",
    university: "",
    graduationYear: "",
    honors: "",
    company: "",
    position: "",
    years: "",
    skills: "",
    certifications: "",
    gender: "",
    ethnicity: "",
    disability: "",
    military: "",
    privacyAgreement: false,
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleFormSubmission = () => {
    // Send the form data via EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      linkedIn: formData.linkedIn,
      website: formData.website,
      education: formData.education,
      university: formData.university,
      graduationYear: formData.graduationYear,
      honors: formData.honors,
      company: formData.company,
      position: formData.position,
      years: formData.years,
      skills: formData.skills,
      certifications: formData.certifications,
      gender: formData.gender,
      ethnicity: formData.ethnicity,
      disability: formData.disability,
      military: formData.military,
      privacyAgreement: formData.privacyAgreement,
      coverLetter: formData.coverLetter,
      resume: formData.resume,
    };

    emailjs
      .send(
        "<service_il7xrjd",
        "template_qp78sdk",
        templateParams,
        "lSgpaCOGPnSdQVq_-"
      )
      .then((result) => {
        console.log("Application sent successfully", result.text);
        // Reset the form or navigate to a success page
      })
      .catch((error) => {
        console.error("Application sending failed", error);
        // Handle error case or show error message to the user
      });
  };

  const handleConfirm = () => {
    // Handle form confirmation logic
    handleFormSubmission();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 6:
        return (
          <Step6
            formData={formData}
            handlePrev={handlePrev}
            handleConfirm={handleConfirm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1 className="text-center p-3">Job Application Form</h1>
        <div>{renderStep()}</div>
      </div>
      <div className="my-5" style={{ backgroundColor: "#495057" }}>
        <Footer />
      </div>
    </div>
  );
};

export default JobApplicationForm;

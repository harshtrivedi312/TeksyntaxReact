import React, { useState } from "react";
import NavBar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import ThankYouPopup from "./ThankYouPopup";
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
    references: [], // Initialize references as an empty array
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
    coverLetter: null,
    resume: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files && files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      const updatedValue = type === "checkbox" ? checked : value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
      }));
    }
  };

  const handleFormSubmission = () => {
    const formDataForEmailJs = new FormData();

    ["coverLetter", "resume"].forEach((fileKey) => {
      if (formData[fileKey]) {
        const fileAsBlob = new Blob([formData[fileKey]], { type: formData[fileKey].type });
        formDataForEmailJs.append(fileKey, fileAsBlob, formData[fileKey].name);
      }
    });

    for (let key in formData) {
      if (key !== "coverLetter" && key !== "resume") {
        const value = formData[key];
        formDataForEmailJs.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
      }
    }

    emailjs
      .send(
        "service_il7xrjd",
        "template_qp78sdk",
        formDataForEmailJs,
        "lSgpaCOGPnSdQVq_-"
      )
      .then((result) => {
        console.log("Application sent successfully", result.text);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Application sending failed", error);
      });
  };

  const handleConfirm = () => {
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
      {formSubmitted && (
        <ThankYouPopup
          handleClose={() => {
            setFormSubmitted(false);
            setStep(1);
            setFormData({}); // Clear the form
          }}
        />
      )}
    </div>
  );
};
export default JobApplicationForm;

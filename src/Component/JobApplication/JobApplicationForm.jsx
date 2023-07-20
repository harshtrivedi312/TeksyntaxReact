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
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setFormData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
    setFormData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Check if the input is a file input and handle it separately
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
    // Send the form data via EmailJS

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("zip", formData.zip);
    formDataToSend.append("linkedIn", formData.linkedIn);
    formDataToSend.append("website", formData.website);
    formDataToSend.append("education", formData.education);
    formDataToSend.append("university", formData.university);
    formDataToSend.append("graduationYear", formData.graduationYear);
    formDataToSend.append("honors", formData.honors);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("years", formData.years);
    formDataToSend.append("skills", formData.skills);
    formDataToSend.append("certifications", formData.certifications);
    formDataToSend.append("references", JSON.stringify(formData.references));
    formDataToSend.append("Gender", formData.gender);
    formDataToSend.append("ethnicity", formData.ethnicity);
    formDataToSend.append("disability", formData.disability);
    formDataToSend.append("military", formData.military);
    formDataToSend.append("privacyAgreement", formData.privacyAgreement);
    formDataToSend.append("coverLetter", formData.coverLetter);
    formDataToSend.append("resume", formData.resume);

    emailjs
      .sendForm(
        "service_il7xrjd",
        "template_qp78sdk",
        formDataToSend,
        "lSgpaCOGPnSdQVq_-"
      )
      .then((result) => {
        console.log("Application sent successfully", result.text);
        setFormSubmitted(true);
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
            setFormData={setFormData}
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
        <ThankYouPopup onClose={() => setFormSubmitted(false)} />
      )}
    </div>
  );
};

export default JobApplicationForm;

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => {
 

  const { resume, coverLetter,company,position,years,skills,certifications} = formData;

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange({
        target: {
          name: "resume",
          type: "file",
          value: file,
        },
      });
    }
  };
  
  const handleCoverLetterChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange({
        target: {
          name: "coverLetter",
          type: "file",
          value: file,
        },
      });
    }
  };
 

  const handlePreviousStepClick = () => {
    handlePrev();
  };

  const handleNextStepClick = () => {
    handleNext();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Form id="step3">
        <h5>Step 3: Work Experience</h5>
        {/* The fields below are editable */}
        <Form.Group controlId='company'>
          <Form.Label>Company:</Form.Label>
          <Form.Control type='text' value={company}  onChange={handleTextChange} required />
        </Form.Group>

        <Form.Group controlId='position'>
          <Form.Label>Position:</Form.Label>
          <Form.Control type='text' value={position}  onChange={handleTextChange} required />
        </Form.Group>

        <Form.Group controlId='years'>
          <Form.Label>Years of Experience:</Form.Label>
          <Form.Control type='text' value={years}  onChange={handleTextChange} required />
        </Form.Group>

        <Form.Group controlId='skills'>
          <Form.Label>Skills:</Form.Label>
          <Form.Control as='textarea' value={skills}  onChange={handleTextChange} />
        </Form.Group>

        <Form.Group controlId='certifications'>
          <Form.Label>Certifications:</Form.Label>
          <Form.Control as='textarea' value={certifications}  onChange={handleTextChange} />
        </Form.Group>


        <Form.Group controlId="resume">
          <Form.Label>Upload Resume:</Form.Label>
          <Form.Control
            type="file"
            name="resume"
            onChange={handleResumeChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="coverLetter">
          <Form.Label>Upload Cover Letter:</Form.Label>
          <Form.Control
            type="file"
            name="coverLetter"
            onChange={handleCoverLetterChange}
          />
        </Form.Group>

        <div style={{ marginTop: "15px" }}>
          <Button
            variant="warning"
            className="prev-step"
            onClick={handlePreviousStepClick}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="next-step mx-3"
            onClick={handleNextStepClick}
          >
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Step3;

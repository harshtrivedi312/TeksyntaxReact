import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const { company, position, years, skills, certifications } = formData;

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    handleChange({
      name: 'resume',
      value: file,
    });
  };

  const handleCoverLetterChange = (e) => {
    const file = e.target.files[0];
    handleChange({
      name: 'coverLetter',
      value: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form or perform any other logic
  };

  const handlePreviousStepClick = () => {
    handlePrev();
  };

  const handleNextStepClick = () => {
    handleNext();
  };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form id='step3' onSubmit={handleSubmit}>
        <h5>Step 3: Work Experience</h5>
        <Form.Group controlId='company'>
          <Form.Label>Company:</Form.Label>
          <Form.Control type='text' name='company' value={company} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='position'>
          <Form.Label>Position:</Form.Label>
          <Form.Control type='text' name='position' value={position} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='years'>
          <Form.Label>Years of Experience:</Form.Label>
          <Form.Control type='text' name='years' value={years} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='skills'>
          <Form.Label>Skills:</Form.Label>
          <Form.Control as='textarea' name='skills' value={skills} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='certifications'>
          <Form.Label>Certifications:</Form.Label>
          <Form.Control as='textarea' name='certifications' value={certifications} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='resume'>
          <Form.Label>Upload Resume:</Form.Label>
          <Form.Control type='file' name='resume' onChange={handleResumeChange} required />
        </Form.Group>

        <Form.Group controlId='coverLetter'>
          <Form.Label>Upload Cover Letter:</Form.Label>
          <Form.Control type='file' name='coverLetter' onChange={handleCoverLetterChange} />
        </Form.Group>

        <div style={{ marginTop: '15px' }}>
          <Button variant='warning' className='prev-step' onClick={handlePreviousStepClick}>
            Previous
          </Button>
          <Button variant='primary' type='submit' className='next-step mx-3' onClick={handleNextStepClick}>
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Step3;

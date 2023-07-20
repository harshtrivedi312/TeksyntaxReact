import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Step4 = ({ formData, handleChange, handleNext,  handlePrev }) => {
  const { company, position, years, skills, certifications } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const handleNextStepClick = () =>{
     // Call the handleNextStep function from props to navigate to the next step
     handleNext();
  }

  const handlePreviousStepClick = () => {
    // Navigate to the previous step without form submission
    handlePrev(); };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form id='step3' onSubmit={handleSubmit}>
        <h5>Step 3: Work Experience</h5>
        <Form.Group controlId='company'>
          <Form.Label>Company:</Form.Label>
          <Form.Control type='text' value={company} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='position'>
          <Form.Label>Position:</Form.Label>
          <Form.Control type='text' value={position} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='years'>
          <Form.Label>Years of Experience:</Form.Label>
          <Form.Control type='text' value={years} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='skills'>
          <Form.Label>Skills:</Form.Label>
          <Form.Control as='textarea' value={skills} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId='certifications'>
          <Form.Label>Certifications:</Form.Label>
          <Form.Control as='textarea' value={certifications} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='resume'>
          <Form.Label>Upload Resume:</Form.Label>
          <Form.Control type='file' onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId='coverLetter'>
          <Form.Label>Upload Cover Letter:</Form.Label>
          <Form.Control type='file' onChange={handleChange} />
        </Form.Group>

        <div style={{ marginTop: '15px' }}>
          <Button variant='warning' className='prev-step' onClick={handlePreviousStepClick}>
            Previous
          </Button>
          <Button variant='primary' type='submit' className='next-step mx-3'onClick={handleNextStepClick}>
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Step4;

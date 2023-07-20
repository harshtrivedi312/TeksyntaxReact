import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Step6 = ({ formData, handlePrev, handleConfirm }) => {
  const handleConfirmClick = () => {
    // Handle form submission or confirmation logic here
    handleConfirm();
  };

  const handlePreviousStepClick = () => {
    handlePrev(); // Navigate to the previous step without form submission
  };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <div className='confirmation-box'>
        <h5>Step 6: Review and Confirm</h5>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{formData.address}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{formData.state}</td>
            </tr>
            <tr>
              <td>Zip:</td>
              <td>{formData.zip}</td>
            </tr>
            <tr>
              <td>LinkedIn:</td>
              <td>{formData.linkedIn}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{formData.website}</td>
            </tr>
            <tr>
              <td>Highest Education:</td>
              <td>{formData.education}</td>
            </tr>
            <tr>
              <td>University:</td>
              <td>{formData.university}</td>
            </tr>
            <tr>
              <td>Year of Graduation:</td>
              <td>{formData.graduationYear}</td>
            </tr>
            <tr>
              <td>Honors/Awards:</td>
              <td>{formData.honors}</td>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{formData.company}</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>{formData.position}</td>
            </tr>
            <tr>
              <td>Years of Experience:</td>
              <td>{formData.years}</td>
            </tr>
            <tr>
              <td>Skills:</td>
              <td>{formData.skills}</td>
            </tr>
            <tr>
              <td>Certifications:</td>
              <td>{formData.certifications}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{formData.gender}</td>
            </tr>
            <tr>
              <td>Ethnicity:</td>
              <td>{formData.ethnicity}</td>
            </tr>
            <tr>
              <td>Disability:</td>
              <td>{formData.disability}</td>
            </tr>
            <tr>
              <td>Military Veteran:</td>
              <td>{formData.military}</td>
            </tr>
            <tr>
              <td>Privacy Agreement:</td>
              <td>{formData.privacyAgreement ? 'Accepted' : 'Not Accepted'}</td>
            </tr>
          </tbody>
        </Table>

        <div style={{ marginTop: '15px' }}>
          <Button variant='warning' className='prev-step' onClick={handlePreviousStepClick}>
            Previous
          </Button>
          <Button variant='primary' className='confirm-btn mx-3' onClick={handleConfirmClick}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Step6;

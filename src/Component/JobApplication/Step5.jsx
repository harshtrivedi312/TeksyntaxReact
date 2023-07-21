import React from 'react';
import PropTypes from 'prop-types'; 
import { Container, Form, Button } from 'react-bootstrap';

const Step5 = ({ formData, handleChange, handlePrev, handleNext }) => {
  const { gender, ethnicity, disability, military, privacyAgreement } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    };
  const handleNextStepClick = () => {
    handleNext();
  };

  const handlePreviousStepClick = () => {
    handlePrev();
  };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form id='step5' onSubmit={handleSubmit}>
        <h5>Step 5: EEO and Diversity</h5>
        <Form.Group controlId='gender'>
          <Form.Label>Gender:</Form.Label>
          <Form.Control as='select' name='gender' value={gender} onChange={handleChange} required>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='ethnicity'>
          <Form.Label>Ethnicity:</Form.Label>
          <Form.Control as='select' name='ethnicity' value={ethnicity} onChange={handleChange} required>
            <option value=''>Select Ethnicity</option>
            <option value='white'>White</option>
            <option value='black'>Black</option>
            <option value='asian'>Asian</option>
            <option value='hispanic'>Hispanic</option>
            <option value='other'>Other</option>
            <option value='PrefferNottoSay'>Preffer not to say</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='disability'>
          <Form.Label>Do you have a disability?</Form.Label>
          <div className='form-check'>
            <Form.Check
              className='form-check-input mx-4'
              type='radio'
              name='disability'
              id='disabilityYes'
              value='yes'
              label='Yes'
              required
              checked={disability === 'yes'}
              onChange={handleChange}
            />
            <Form.Check
              className='form-check-input mx-4'
              type='radio'
              name='disability'
              id='disabilityNo'
              value='no'
              label='No'
              required
              checked={disability === 'no'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId='military'>
          <Form.Label>Military Veteran?</Form.Label>
          <div className='form-check'>
            <Form.Check
              className='form-check-input mx-4'
              type='radio'
              name='military'
              id='militaryYes'
              value='yes'
              label='Yes'
              required
              checked={military === 'yes'}
              onChange={handleChange}
            />
            <Form.Check
              className='form-check-input mx-4'
              type='radio'
              name='military'
              id='militaryNo'
              value='no'
              label='No'
              required
              checked={military === 'no'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId='privacyAgreement'>
          <Form.Label className='my-4'>Please read and accept the privacy agreement:</Form.Label>
          <div className='container'>
            {/* Privacy Agreement Card */}
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Job Application Privacy Statement</h5>
                    <p className='card-text'>
                      At TekSyntax Inc., we value your privacy and are committed to protecting your personal
                      information. This privacy statement explains how we collect, use, and disclose the personal data
                      you provide during the job application process.
                    </p>
                    {/* More content from the privacy agreement goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='form-check'>
            <Form.Check
              className='form-check-input mx-4 my-4'
              type='checkbox'
              id='privacyAgreement'
              name='privacyAgreement'
              label='I agree to the privacy terms and conditions.'
              required
              checked={privacyAgreement}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <div style={{ marginTop: '15px' }} className='my-4 p-3'>
          <Button variant='warning' className='prev-step' onClick={handlePreviousStepClick}>
            Previous
          </Button>
          <Button variant='warning' type='submit' className='next-step mx-3' onClick={handleNextStepClick}>
            Next Step
          </Button>
        </div>
      </Form>
    </Container>
  );
};

// Define prop types
Step5.propTypes = {
  formData: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    ethnicity: PropTypes.string.isRequired,
    disability: PropTypes.string.isRequired,
    military: PropTypes.string.isRequired,
    privacyAgreement: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Step5;

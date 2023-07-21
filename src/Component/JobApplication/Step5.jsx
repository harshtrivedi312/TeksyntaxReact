import React from "react";
import PropTypes from "prop-types";
import { Container, Form, Button, Card } from "react-bootstrap";

const Step5 = ({ formData, handleChange, handlePrev, handleNext }) => {
  const { gender, ethnicity, disability, military, privacyAgreement } =
    formData;

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
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
        <Form id="step5" onSubmit={handleSubmit}>
          <h5>Step 5: EEO and Diversity</h5>
          <Form.Group controlId="gender">
            <Form.Label>Gender:</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="ethnicity">
            <Form.Label>Ethnicity:</Form.Label>
            <Form.Control
              as="select"
              name="ethnicity"
              value={ethnicity}
              onChange={handleChange}
              required
            >
              <option value="">Select Ethnicity</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="asian">Asian</option>
              <option value="hispanic">Hispanic</option>
              <option value="other">Other</option>
              <option value="PrefferNottoSay">Preffer not to say</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="disability">
            <Form.Label>Do you have a disability?</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Check
                className="form-check-input mx-2"
                type="radio"
                name="disability"
                id="disabilityYes"
                value="yes"
                label="Yes"
                required
                checked={disability === "yes"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
              <Form.Check
                className="form-check-input mx-4"
                type="radio"
                name="disability"
                id="disabilityNo"
                value="no"
                label="No"
                required
                checked={disability === "no"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="military">
            <Form.Label className="d-flex align-items-center">
              Military Veteran?
            </Form.Label>
            <div className="d-flex align-items-center">
              <Form.Check
                className="form-check-input mx-2"
                type="radio"
                name="military"
                id="militaryYes"
                value="yes"
                label="Yes"
                required
                checked={military === "yes"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
              <Form.Check
                className="form-check-input mx-4"
                type="radio"
                name="military"
                id="militaryNo"
                value="no"
                label="No"
                required
                checked={military === "no"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="privacyAgreement">
            <Form.Label className="my-4">
              Please read and accept the privacy agreement:
            </Form.Label>
            {/* Privacy Agreement Card */}
            <Card>
              <Card.Body>
                <h5 className="card-title">
                  Job Application Privacy Statement
                </h5>
                <p className="card-text">
                 <b>Teksyntax Inc.</b> is committed to protecting the
                  privacy of your personal information. This privacy statement
                  describes how we collect, use, and share your personal
                  information when you apply for a job with us.<br></br> <b>**What Personal
                  Information We Collect**</b> <br></br>We collect the following personal
                  information from you when you apply for a job with us: *
                  Contact information, such as your name, email address, and
                  phone number * Demographic information, such as your gender,
                  race, and ethnicity * Education and employment history *
                  References * Resume or CV * Any other information you provide
                  to us in your application<br></br> <b>**Why We Collect Personal
                  Information**</b><br></br> We collect your personal information to: *
                  Evaluate your qualifications for the job you are applying for
                  * Contact you about the job application process * Conduct
                  background checks * Comply with legal requirements<br></br> <b>**How We
                  Use Personal Information**</b><br></br> We use your personal information
                  for the purposes described above. We may also use your
                  personal information for other purposes, such as: * Sending
                  you marketing communications about our products and services *
                  Improving our website and products * Conducting research<br></br> <b>**How
                  We Share Personal Information**</b><br></br> We may share your personal
                  information with the following third parties: * Background
                  check companies * Our recruiters * Our hiring managers * Our
                  legal counsel We will only share your personal information
                  with these third parties if they have a legitimate business
                  need to know the information.<br></br> <b>**Your Rights**</b><br></br> You have the
                  following rights with respect to your personal information: *
                  The right to access your personal information * The right to
                  correct your personal information * The right to delete your
                  personal information * The right to object to the processing
                  of your personal information * The right to withdraw your
                  consent to the processing of your personal information You can
                  exercise your rights by contacting us at <strong>information@teksyntaxinc.com</strong> or
                  <strong>(703)-734-6021</strong>.<br></br> <b>**How We Protect Personal Information** </b><br></br>We
                  take steps to protect the security of your personal
                  information, including: * Using secure servers * Using
                  encryption * Limiting access to your personal information to
                  authorized employees **How Long We Keep Personal Information**
                  We will keep your personal information for as long as it is
                  necessary for the purposes described above. We may also keep
                  your personal information for a longer period of time if we
                  are required to do so by law. **Changes to This Privacy
                  Statement** We may update this privacy statement from time to
                  time. If we make any material changes to the privacy
                  statement, we will notify you by email or by posting a notice
                  on our website.<br></br> <b>**Contact Us**</b> <br></br>If you have any questions about
                  this privacy statement, please contact us at <strong>information@teksyntaxinc.com</strong>
                   or <strong>(703)-734-6021</strong>.
                </p>
                {/* More content from the privacy agreement goes here */}
              </Card.Body>
            </Card>
            <Form.Check
              type="checkbox"
              id="privacyAgreement"
              name="privacyAgreement"
              label="I agree to the privacy terms and conditions."
              checked={privacyAgreement}
              onChange={handleChange}
              className="my-4"
            />
          </Form.Group>

          <div style={{ marginTop: "15px" }} className="my-4 p-3">
            <Button
              variant="warning"
              className="prev-step"
              onClick={handlePreviousStepClick}
            >
              Previous
            </Button>
            <Button
              variant="warning"
              type="submit"
              className="next-step mx-3"
              onClick={handleNextStepClick}
            >
              Next Step
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

// Define prop types (same as before)
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

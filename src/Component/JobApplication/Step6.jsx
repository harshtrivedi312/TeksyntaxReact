import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Step6 = ({ formData, handlePrev, handleConfirm }) => {
  // Destructure the references array from formData
  // const { company, position, years, skills, certifications, reference  ,...otherData } = formData;
  const references = formData.reference || []; // If references is undefined, set it to an empty array
  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <div>
        <h5>Step 6: Review Your Application</h5>
        <Table striped bordered responsive>
          <tbody>
            <th>Personal Information</th>
            <tr>
              <td>Full Name:</td>
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
              <td>ZIP:</td>
              <td>{formData.zip}</td>
            </tr>
            <tr>
              <td>LinkedIn Profile:</td>
              <td>{formData.linkedIn}</td>
            </tr>
            <tr>
              <td>Personal Website:</td>
              <td>{formData.website}</td>
            </tr>
            <th>Education Information</th>
            <tr>
              <td>Education Level:</td>
              <td>{formData.education}</td>
            </tr>
            <tr>
              <td>University:</td>
              <td>{formData.university}</td>
            </tr>
            <tr>
              <td>Graduation Year:</td>
              <td>{formData.graduationYear}</td>
            </tr>
            <tr>
              <td>Honors:</td>
              <td>{formData.honors}</td>
            </tr>
            <th>Work Information</th>
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
            <th>Professional References</th>

            {/* Render the references if available */}
            {references.length > 0 && (
              <tr>
                <td>References:</td>
                <td>
                  <ul>
                    {references.map((reference, index) => (
                      <li key={index}>
                        {`Company: ${reference.company}, Manager: ${reference.manager}, Email: ${reference.email}, Phone: ${reference.phone}`}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
            <th>EEO and Diversity: </th>

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
              <td>Military Service:</td>
              <td>{formData.military}</td>
            </tr>
            <tr>
              <td>Privacy Agreement:</td>
              <td>{formData.privacyAgreement ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </Table>

        <div style={{ marginTop: "15px" }}>
          <Button variant="warning" className="prev-step" onClick={handlePrev}>
            Previous
          </Button>
          <Button
            variant="primary"
            className="next-step mx-3"
            onClick={handleConfirm}
          >
            Confirm & Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Step6;

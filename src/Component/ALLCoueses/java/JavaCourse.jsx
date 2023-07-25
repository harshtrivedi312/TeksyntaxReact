import React from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import CourseInfo from "../reusable/courseInfo";
import CourseModules from "../reusable/courseModules";
import Admission from "../reusable/admissionProcess";

export default function JavaCourse() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <header
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left side content */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-secondary">
            <h1 className="mb-3">Java Development Course</h1>
            <h4 className="mb-3">
              Learn to build java applications from scratch and land your dream
              job as Developer with the #1 ranked bootcamp in the world.
            </h4>
            <a
              className="btn btn-outline-dark btn-lg mx-3"
              href="#!"
              role="button"
            >
              Enroll Now
            </a>
            <a className="btn btn-outline-dark btn-lg" href="#!" role="button">
              view Syllabus
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://teksyntaxwebimages.s3.amazonaws.com/images/OtherImages/javaDeveloper.jpg')",
            height: 500,
            flex: 1,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>
        </div>
      </header>
      <div>
        <section>
          <SecondNavigation />
        </section>
        <section>
          <CourseInfo />
        </section>
        <CourseModules />
        <div className="my-4">
          <Admission />
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}

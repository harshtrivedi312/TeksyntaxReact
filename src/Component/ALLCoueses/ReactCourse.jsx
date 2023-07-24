import React from "react";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

export default function ReactCourse() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <header
        style={{
          backgroundColor: "#899FD1",
          display: "flex",
          alignItems: "center",
          height:"690px",
        }}
      >
        {/* Left side content */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-white">
            <p>LEARN FROM THE INDUSTRY&apos;S TOP TALLENT</p>
            <h1 className="mb-3"><strong>React JS Course</strong></h1>
            <h4 className="mb-3">Expand your React programming skills, and boost your profile on the job market. Learn to build sophisticated, scalable web applications.</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Enroll Now 
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://downloader.la/temp/[Downloader.la]-64bd400d6d57d.jpg')",
            height: '681px',
            flex: 1,
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>
        </div>
      </header>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

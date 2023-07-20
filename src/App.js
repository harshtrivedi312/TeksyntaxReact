import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/HomePageRender/Homepage';
import JobApplicationForm from '../src/Component/JobApplication/JobApplicationForm';
import FindCourses from '../src/Component/FindCourses/courses'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/job-application-form" element={<JobApplicationForm />} />
          <Route path="/find-courses" element={<FindCourses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import ProblemForm from "./ProblemForm";
import { useLocation } from 'react-router-dom';

function ProblemFormPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const work = queryParams.get("work");
  return (
    <div style={{ backgroundColor: "#FAF7F0" }}>
      <NavBar />
      <ProblemForm worker={work} />
      <Footer />
    </div>
  );
}

export default ProblemFormPage;

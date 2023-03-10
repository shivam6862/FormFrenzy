import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../questionPaper/QuestionForm";

const CreatePaperForExam = () => {
  const navigate = useNavigate();

  return (
    <div className="QuestionPaper_box">
      <nav className="header_QuestionPaper">
        <button
          className="header_QuestionPaper_back_button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </nav>
      <QuestionForm />
    </div>
  );
};

export default CreatePaperForExam;

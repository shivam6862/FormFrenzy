import React from "react";

const AllOptionButton = ({
  i,
  addOptionsToEachQuestion,
  copyTheQuestion,
  deleteTheQuestion,
  requiredQuestion,
  addAnswer,
  changeQuestionType,
}) => {
  return (
    <div>
      <div className="options">
        <div
          onClick={() => {
            addOptionsToEachQuestion(i);
          }}
        >
          <button>Add options</button>
        </div>
        <div
          onClick={() => {
            copyTheQuestion(i);
          }}
        >
          <button>Copy Question</button>
        </div>
        <div
          onClick={() => {
            deleteTheQuestion(i);
          }}
        >
          <button>Delete Question</button>
        </div>
        <div
          onClick={() => {
            requiredQuestion(i);
          }}
        >
          <button>required Question</button>
        </div>
        <div
          onClick={() => {
            addAnswer(i);
          }}
        >
          <button>add Answer</button>
        </div>
      </div>
      <div className="options">
        <div
          onClick={() => {
            changeQuestionType("radio", i);
          }}
        >
          <button>radio</button>
        </div>
        <div
          onClick={() => {
            changeQuestionType("checkbox", i);
          }}
        >
          <button>checkbox</button>
        </div>
        <div
          onClick={() => {
            changeQuestionType("text", i);
          }}
        >
          <button>Text</button>
        </div>
      </div>
    </div>
  );
};

export default AllOptionButton;

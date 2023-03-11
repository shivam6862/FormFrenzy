import React from "react";
import AddEachQuestionFormOpen from "./AddEachQuestionFormOpen";
import AddEachQuestionFormClosed from "./AddEachQuestionFormClosed";

const AddEachQuestionForm = ({
  questions,
  i,
  addOptionsToEachQuestion,
  copyTheQuestion,
  deleteTheQuestion,
  requiredQuestion,
  addAnswer,
  changeQuestionType,
  changeQuestionText,
  changeQuestionOption,
  RemoveOptionsToEachQuestion,
  setQuestions,
  handleExpand,
}) => {
  return (
    <div key={i}>
      {questions[i].open ? (
        <AddEachQuestionFormOpen
          questions={questions}
          i={i}
          addOptionsToEachQuestion={addOptionsToEachQuestion}
          copyTheQuestion={copyTheQuestion}
          deleteTheQuestion={deleteTheQuestion}
          requiredQuestion={requiredQuestion}
          addAnswer={addAnswer}
          changeQuestionType={changeQuestionType}
          changeQuestionText={changeQuestionText}
          changeQuestionOption={changeQuestionOption}
          RemoveOptionsToEachQuestion={RemoveOptionsToEachQuestion}
          setQuestions={setQuestions}
        />
      ) : (
        <AddEachQuestionFormClosed
          questions={questions}
          i={i}
          setQuestions={setQuestions}
          handleExpand={handleExpand}
        />
      )}
    </div>
  );
};

export default AddEachQuestionForm;

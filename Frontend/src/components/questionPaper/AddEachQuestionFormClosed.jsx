import React from "react";
import { useState } from "react";

const AddEachQuestionFormClosed = ({
  questions,
  i,
  setQuestions,
  handleExpand,
}) => {
  const question = questions[i];

  const [dragItem, setDragItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  const dragStart = (e, position) => {
    setDragItem(position);
  };

  const dragEnter = (e, position) => {
    console.log(position);
    setDragOverItem(position);
  };

  const drop = (e) => {
    const copyQuestionItems = [...questions];
    console.log(dragItem, dragOverItem);
    const dragOnItemContent = copyQuestionItems[dragItem];
    const dragOverItemContent = copyQuestionItems[dragOverItem];
    copyQuestionItems.splice(dragItem, 1, dragOverItemContent);
    copyQuestionItems.splice(dragOverItem, 1, dragOnItemContent);
    setDragItem(null);
    setDragOverItem(null);
    setQuestions(copyQuestionItems);
    console.log(copyQuestionItems);
  };

  return (
    <div
      key={i}
      className={questions[i].open ? "each_question" : "each_question_closed"}
      onDragStart={(e) => dragStart(e, i)}
      onDragEnter={(e) => dragEnter(e, i)}
      // onDragEnd={drop}
      draggable
      onClick={() => {
        handleExpand(i);
      }}
    >
      <div className="QuestionAsked_OnClosed">
        {i+1}
        {"."}
        {question.questionText}
      </div>
      <div>
        {question.options.map((option, j) => (
          <div key={j} className="checkbox">
            {question.questionType != "text" ? (
              <>
                {question.questionType == "radio" ? (
                  <>
                    <input
                      className="checkbox_box"
                      type={question.questionType}
                      name="Each_Option"
                      value={option.optionText}
                      id={option.optionText}
                    />
                    <label htmlFor={option.optionText}>
                      <input
                        className="checkbox_item"
                        placeholder={"Option " + (Number(j) + 1)}
                        type="text"
                        value={option.optionText}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      className="checkbox_box"
                      type={question.questionType}
                      name="Each_Option"
                      value={option.optionText}
                      id={option.optionText}
                    />
                    <label htmlFor={option.optionText}>
                      <input
                        className="checkbox_item"
                        placeholder={"Option " + (Number(j) + 1)}
                        type="text"
                        value={option.optionText}
                      />
                    </label>
                  </>
                )}
              </>
            ) : (
              <input
                className="checkbox_item"
                placeholder={"Option " + (Number(j) + 1)}
                type="text"
                // "(" + String.fromCharCode(j + 65) + ") "
                value={option.optionText}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEachQuestionFormClosed;

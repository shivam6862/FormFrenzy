import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddAnswerForm from "./AddAnswerForm";
import AddEachQuestionForm from "./AddEachQuestionForm";
import { postWithCredentials } from "../data/postWithCredentials";

const QuestionForm = () => {
  const navigate = useNavigate();

  const newQuestion = {
    questionText: "Question",
    questionType: "radio",
    options: [{ optionText: "Option 1" }],
    answer: false,
    answerKey: [
      { optionMark: "unmark" },
      { optionMark: "unmark" },
      { optionMark: "unmark" },
      { optionMark: "unmark" },
      { optionMark: "unmark" },
    ],
    points: 0,
    open: true,
    required: false,
  };

  const [questions, setQuestions] = useState([]);
  const [untitledDocument, setUntitledDocument] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [timeofTest, setTimeOfTest] = useState("");
  function changeQuestionText(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  }

  function changeQuestionOption(text, i, j) {
    var newQuestion = [...questions];
    newQuestion[i].options[j].optionText = text;
    setQuestions(newQuestion);
  }

  function changeQuestionType(type, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionType = type;
    setQuestions(newQuestion);
  }

  function createNewQuestion() {
    expandCloseAll();
    var previousAllQuestion = [...questions];
    previousAllQuestion.push(newQuestion);
    setQuestions(previousAllQuestion);
  }

  function copyTheQuestion(i) {
    expandCloseAll();
    var copyOfQuestion = [...questions];
    var newCopyQuestion = { ...copyOfQuestion[i] };
    setQuestions([...questions, newCopyQuestion]);
  }

  function requiredQuestion(i) {
    var requireQuestionPart = [...questions];
    requireQuestionPart[i].required = !requireQuestionPart[i].required;
    setQuestions(requireQuestionPart);
  }

  function deleteTheQuestion(i) {
    var deleteTheQuestion = [...questions];
    if (deleteTheQuestion.length > 1) {
      deleteTheQuestion.splice(i, 1);
    }
    setQuestions(deleteTheQuestion);
  }

  function addOptionsToEachQuestion(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option " + (optionsOfQuestion[i].options.length + 1),
      });
    }
    setQuestions(optionsOfQuestion);
  }

  function RemoveOptionsToEachQuestion(i, j) {
    var removeOptioninEachQuestion = [...questions];
    if (removeOptioninEachQuestion[i].options.length > 1) {
      removeOptioninEachQuestion[i].options.splice(j, 1);
      setQuestions(removeOptioninEachQuestion);
    }
  }

  const SubmitTheQuestionPaper = async () => {
    const DataSendToTheBackend = [...questions];
    DataSendToTheBackend.push({ untitledDocument: untitledDocument });
    DataSendToTheBackend.push({ formDescription: formDescription });
    DataSendToTheBackend.push({ time: timeofTest });

    const response = await postWithCredentials(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/addQuestionPaper`,
      { DataSendToTheBackend }
    );
    const newGroupId = await response.json();

    setFormDescription("");
    setUntitledDocument("");
    setTimeOfTest("");
    setQuestions([]);
    navigate(`/questionpaper/${newGroupId}`);
  };

  function expandCloseAll() {
    let allQuestionSet = [...questions];
    for (let i = 0; i < allQuestionSet.length; i++) {
      allQuestionSet[i].open = false;
    }
    setQuestions(allQuestionSet);
  }

  function handleExpand(place) {
    let IthQuestionExpand = [...questions];
    for (let i = 0; i < IthQuestionExpand.length; i++) {
      if (i == place) {
        IthQuestionExpand[i].open = true;
      } else {
        IthQuestionExpand[i].open = false;
      }
    }
    setQuestions(IthQuestionExpand);
  }

  function OptionPoints(points, questionNumber) {
    var OptionPOintsOfQuestion = [...questions];
    OptionPOintsOfQuestion[questionNumber].points = points;
    setQuestions(OptionPOintsOfQuestion);
  }

  function doneAnswer(i) {
    var DoneAnswerOfQuestion = [...questions];
    DoneAnswerOfQuestion[i].answer = !DoneAnswerOfQuestion[i].answer;
    setQuestions(DoneAnswerOfQuestion);
  }

  function addAnswer(i) {
    var AddAnswerOfQuestion = [...questions];
    AddAnswerOfQuestion[i].answer = !AddAnswerOfQuestion[i].answer;
    setQuestions(AddAnswerOfQuestion);
  }

  function questionsUI() {
    if (questions.length == 0) return "Question to be Create !";

    return questions.map((question, i) => (
      <div key={i}>
        {!questions[i].answer ? (
          <AddEachQuestionForm
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
            handleExpand={handleExpand}
          />
        ) : (
          <AddAnswerForm
            questions={questions}
            i={i}
            doneAnswer={doneAnswer}
            OptionPoints={OptionPoints}
          />
        )}
      </div>
    ));
  }

  return (
    <div className="top_Question_form">
      <div className="question_form">
        <div className="question_section_part">
          <input
            type="text"
            name="Top_Name"
            className="question_section_part_Top_Name"
            placeholder="Untitled document"
            value={untitledDocument}
            onChange={(e) => {
              setUntitledDocument(e.target.value);
            }}
          />
          <input
            type="text"
            name="Top_Desc"
            className="question_section_part_Top_Desc"
            placeholder="Form description"
            value={formDescription}
            onChange={(e) => {
              setFormDescription(e.target.value);
            }}
          />
        </div>
        <div className="question_section_questions">{questionsUI()}</div>
        <div className="add_Question_button">
          <input
            type="number"
            name="Duration of test.."
            className="question_section_part_Top_Desc_time"
            placeholder="Duration of test in minutes.."
            value={timeofTest}
            onChange={(e) => {
              setTimeOfTest(e.target.value);
            }}
          />
          <button onClick={createNewQuestion} className="addQuestion">
            Add question
          </button>
        </div>
      </div>
      <div className="submitPaper_button">
        <button onClick={SubmitTheQuestionPaper} className="submitPaper">
          Create Question Paper
        </button>
      </div>
    </div>
  );
};
export default QuestionForm;

import { useRef } from "react";

export const DragAndDrop = ({ questions }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyQuestionItems = questions;
    const dragOnItemContent = copyQuestionItems[dragItem.current];
    const dragOverItemContent = copyQuestionItems[dragOverItem.current];
    copyQuestionItems.splice(dragItem.current, 1, dragOverItemContent);
    copyQuestionItems.splice(dragOverItem.current, 1, dragOnItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    // setQuestions = copyQuestionItems;
    // setQuestions(copyQuestionItems);
  };

  return { dragStart, dragEnter, drop };
};

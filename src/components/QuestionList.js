
import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onDeleteQuestion,onUpdate}) {





  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=> <QuestionItem onUpdate={onUpdate} onDeleteQuestion={onDeleteQuestion} question={question} /> )}</ul>
    </section>
  );
}

export default QuestionList;

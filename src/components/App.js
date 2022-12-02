import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function onAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function onDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  function onUpdate(updated) {
    const updatedQ = questions.map((question) => {
      if (question.id === updated.id) {
        return updated;
      } else {
        return question;
      }
    });
    setQuestions(updatedQ);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion={onAddQuestion} /> : <QuestionList onUpdate={onUpdate} onDeleteQuestion={onDeleteQuestion} questions={questions} />}
    </main>
  );
}

export default App;
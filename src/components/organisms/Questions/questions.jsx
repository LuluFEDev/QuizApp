import { useState } from "react";
import Question from "../../molecules/Question/question";
import AddQuestion from "../../molecules/AddQuestion/addQuestion";

const Questions = () => {
  const [questions, setQuestions] = useState([{question: "", answer: ""}]);

  return (
    <div>
      {questions.map((question, index) => (
        <Question key={index} text={question.question} answer={question.answer} />
      ))}
      <AddQuestion onAdd={(question) => setQuestions([...questions, question])} />
    </div>
  );
};

export default Questions;

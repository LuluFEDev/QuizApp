import { useState } from "react";
import Question from "../../molecules/Question/question";
import AddQuestion from "../../molecules/AddQuestion/addQuestion";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      <AddQuestion onAdd={(question) => setQuestions([...questions, question])} />
      {questions.map((question, index) => (
        <Question key={index} text={question} />
      ))}
    </div>
  );
};

export default Questions;

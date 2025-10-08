import { useState } from "react";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

function AddQuestion({...props}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddQuestion = () => {
    if (question.trim() && answer.trim()) {
      if (typeof props.onAdd === "function") {
        props.onAdd({question: question, answer: answer});
      }
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <>
      <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter question" />
      <Input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter answer" />
      <Button onClick={handleAddQuestion} text={"Add Question"} />
    </>
  );
}

export default AddQuestion;

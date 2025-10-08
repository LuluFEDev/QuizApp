import { useState } from "react";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

function AddQuestion() {
  const [question, setQuestion] = useState("");

  const handleAddQuestion = () => {
    console.log('function called')
    if (question.trim()) {
      console.log("New Question Added: ", question);
      setQuestion("");
    }
  };

  return (
    <>
      <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
      <Button onClick={handleAddQuestion} text={"Add Question"} />
    </>
  );
}

export default AddQuestion;

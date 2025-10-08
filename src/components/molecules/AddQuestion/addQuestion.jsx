import { useState } from "react";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

function AddQuestion({...props}) {
  const [question, setQuestion] = useState("");

  const handleAddQuestion = () => {
    if (question.trim()) {
      console.log("New Question Added: ", question);
      console.log("Props: ", props);
      if (typeof props.onAdd === "function") {
        props.onAdd(question);
      }
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

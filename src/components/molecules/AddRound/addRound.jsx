import { useState } from "react";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

function AddRound({...props}) {
  const [round, setRound] = useState("");

  const handleAddRound = () => {
    if (round.trim()) {
      if (typeof props.onAdd === "function") {
        props.onAdd(round);
      }
      setRound("");
    }
  };

  return (
    <>
      <Input value={round} onChange={(e) => setRound(e.target.value)}  placeholder="Enter round name" />
      <Button onClick={handleAddRound} text={"Add Round"} />
    </>
  );
}

export default AddRound;

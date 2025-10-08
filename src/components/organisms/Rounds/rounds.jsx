import { useState } from "react";
import Round from "../../molecules/Round/round";
import AddRound from "../../molecules/AddRound/addRound";

const Rounds = () => {
  const [rounds, setRounds] = useState([]);

  return (
    <div>
      {rounds.map((round, index) => (
        <Round key={index} text={round} />
      ))}
      <AddRound onAdd={(round) => setRounds([...rounds, round])} />
    </div>
  );
};

export default Rounds;

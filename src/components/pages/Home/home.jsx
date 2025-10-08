import smileyFace from "../../../assets/smiley.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <NavLink to="/admin">
          <img src={smileyFace} className="logo react" alt="Smiley face" />
        </NavLink>
      </div>
      <h1>Quiz app</h1>
    </>
  );
}

export default Home;

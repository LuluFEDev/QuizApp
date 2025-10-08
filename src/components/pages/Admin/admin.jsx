import { NavLink } from "react-router-dom";
import Questions from "../../organisms/Questions/questions";
import "./admin.scss";
import Rounds from "../../organisms/Rounds/rounds";
import QuizPreview from "../../organisms/QuizPreview/quizPreview";

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <NavLink to="/">Go to Home</NavLink>

      <div className="adding-panel">
        <Rounds />

        <Questions />
      </div>
      <div className="preview-panel">
        <QuizPreview />
      </div>
    </div>
  );
}

export default Admin;

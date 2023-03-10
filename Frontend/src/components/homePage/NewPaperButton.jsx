import { Link } from "react-router-dom";
const NewPaperButton = () => (
  <Link className="link" to="/createnewfrom">
    <div className="new-paper-button">
      <p className="plug-sign">+</p>
    </div>
  </Link>
);
export default NewPaperButton;

import { Link } from "react-router-dom";

const AllResultOfUserItem = ({ result }) => (
  <Link to={`/result/${result.paperId}`}>
    <div className="results-list-item-wrap-result">
      <div>
        {
          result.checkedAnswerpaper[result.checkedAnswerpaper.length - 1]
            .formDescription
        }
      </div>
      <div>
        {
          result.checkedAnswerpaper[result.checkedAnswerpaper.length - 2]
            .untitledDocument
        }
      </div>
      <div>
        Marks Obtained :{" "}
        {result.checkedAnswerpaper[result.checkedAnswerpaper.length - 3]}
      </div>
    </div>
  </Link>
);

export default AllResultOfUserItem;

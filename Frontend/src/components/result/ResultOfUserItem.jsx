const ResultOfUserItem = ({ result }) => (
  <div className="result-list-item">
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
);

export default ResultOfUserItem;

import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(){
  const [qList, setQList] = useState([]); //State for the list of questions.
  // Add state?

  useEffect(() => { // fetch function inside of useEffect.
    fetch("http://localhost:4000/questions") //Default fetch request to fetch the list of questions. (Array)
    .then((r) => r.json())
    .then((data) => setQList(data));
  }, []);

  // console.log("qList", qList);

  return(
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {qList.map((question) => (
          <QuestionItem question={question} /> // Passes down question to QuestionItem
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
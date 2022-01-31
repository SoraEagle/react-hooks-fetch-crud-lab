import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({qList}){
  // Add state?
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
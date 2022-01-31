import React from "react";

function QuestionItem({question}){ //question is brought down from QuestionList.
  const {id, prompt, answers, correctIndex} = question; // question object; Should a key be added?
  // console.log("question", question);

  // Do the fetch PATCH and/or DELETE requests belong here?

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return(
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
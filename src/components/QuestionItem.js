import React from "react";

function QuestionItem({question, onDeleteQuestion, qList, setQList}){ //question is brought down from QuestionList.
  const {id, prompt, answers, correctIndex} = question; // question object; Should a key be added?
  // console.log("question", question);

  // Does the PATCH fetch request belong here?
  
  function deleteQuestion(){ //Function for deleting a question
    fetch(`http://localhost:4000/questions/${question.id}`, { //DELETE fetch request to delete a question from qList
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question)); //Use a callback function here (onDeleteQuestion).
  }

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
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
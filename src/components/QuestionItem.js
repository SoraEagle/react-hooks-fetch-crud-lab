import React from "react";

function QuestionItem({question, onUpdateQuestion, onDeleteQuestion}){
  const {id, prompt, answers, correctIndex} = question; // question object; Should a key be added?
  // console.log("question", question);

  function updateQuestion(){ //The umbrella function for updating a question
    fetch(`http://localhost:4000/questions/${question.id}`, { // PATCH fetch request to update a question on qList
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        correctIndex: question.correctIndex // 
      })
    })
    .then((r) => r.json())
    .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }
  
  function deleteQuestion(){ //Function for deleting a question.
    fetch(`http://localhost:4000/questions/${question.id}`, { //DELETE fetch request to delete a question from qList.
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question)); //Uses a callback function (onDeleteQuestion) from QuestionList (handleDeleteQuestion).
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
        <select defaultValue={correctIndex}>{options} onChange={updateQuestion}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({qList, setQList}){
  // Add state?
  
  useEffect(() => { // fetch function inside of useEffect.
    fetch("http://localhost:4000/questions") //Default fetch request (GET) to fetch the list of questions.
    .then((r) => r.json())
    .then((data) => setQList(data));
  }, [setQList]);
  // console.log("qList", qList);

  function handleUpdateQuestion(updatedQuestion){
    updatedQuestion = qList.map((question) => {
      if(question.id === updatedQuestion.id){
        return updatedQuestion;
      }else{
        return question;
      }
    });
    setQList(updatedQuestion);
  }

  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = qList.filter((question) => question.id !== deletedQuestion.id);
    setQList(updatedQuestions);
    console.log("Deleting question ", `${deletedQuestion.id}`, ': ', deletedQuestion);
  }

  return(
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {qList.map((question) => (
          <QuestionItem
          question={question}
          onUpdateQuestion={handleUpdateQuestion}
          onDeleteQuestion={handleDeleteQuestion} /> 
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
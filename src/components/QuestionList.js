import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({qList, setQList}){
  // Add state?
  
  useEffect(() => { // fetch function inside of useEffect.
    fetch("http://localhost:4000/questions") //Default fetch request to fetch the list of questions. (Array)
    .then((r) => r.json())
    .then((data) => setQList(data));
  }, [setQList]);

  // console.log("qList", qList);

  // create a handledeleteQuestion function here
  function handledeleteQuestion(deletedQuestion){
    const updatedQuestions = qList.filter((question) => question.id !== deletedQuestion.id);
    setQList(updatedQuestions);
    console.log("Deleting question ", `${deletedQuestion.id}`, ': ', deletedQuestion);
  }

  return(
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {qList.map((question) => (
          <QuestionItem question={question} onDeleteQuestion={handledeleteQuestion} qList={qList} setQList={setQList} /> // Passes down question to QuestionItem
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
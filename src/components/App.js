import React, {useEffect, useState} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App(){
  const [page, setPage] = useState("List");
  const [qList, setQList] = useState([]); //State for the list of questions.
  const [newQuestion, setNewQuestion] = useState("");
  // What other state is needed?

  useEffect(() => { // fetch function inside of useEffect.
    fetch("http://localhost:4000/questions") //Default fetch request to fetch the list of questions. (Array)
    .then((r) => r.json())
    .then((data) => setQList(data));
    // Do more with data?
  }, []);

  // Where does the fetch PATCH request belong?
  // Is any cleanup needed?

  function handleAddQuestion(newQuestion){
    setQList([...qList, newQuestion]);
  }

  return(
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm
      qList={qList} setQList={setQList}
      onAddQuestion={handleAddQuestion}
      newQuestion={newQuestion} setNewQuestion={setNewQuestion} /> : 
      <QuestionList qList={qList} />}
    </main>
  );
}

export default App;
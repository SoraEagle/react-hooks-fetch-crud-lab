import React, {useState} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App(){
  const [page, setPage] = useState("List"); 
  const [newQuestion, setNewQuestion] = useState("");
  // Is any other state needed?

  // Where does the fetch PATCH request belong?
  // Is any cleanup needed?

  return(
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm
      newQuestion={newQuestion} setNewQuestion={setNewQuestion} /> : 
      <QuestionList />}
    </main>
  );
}

export default App;
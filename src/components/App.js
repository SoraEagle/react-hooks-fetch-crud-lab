import React, {useState} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App(){
  const [page, setPage] = useState("List"); 
  const [newQuestion, setNewQuestion] = useState("");
  const [qList, setQList] = useState([]);

  return(
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm
      qList={qList} setQList={setQList}
      newQuestion={newQuestion} setNewQuestion={setNewQuestion} /> : 
      <QuestionList
      qList={qList} setQList={setQList} />}
    </main>
  );
}

export default App;
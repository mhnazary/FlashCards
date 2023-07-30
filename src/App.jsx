import { useState } from "react";
import "./App.css";

let flashcard = [
  {
    id: 1,
    question: "first question",
    answer: "",
  },
  {
    id: 2,
    question: "second question",
    answer: "answer 2",
  },
  {
    id: 3,
    question: "third question",
    answer: "answer 3",
  },
  {
    id: 4,
    question: "fourth question",
    answer: "answer 4",
  },
  {
    id: 5,
    question: "fifth question",
    answer: "answer 5",
  },
  {
    id: 6,
    question: "six question",
    answer: "answer 6",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handle(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="App">
      {flashcard.map((question) => (
        <div
          onClick={() => handle(question.id)}
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          {question.id === selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}

export default App;

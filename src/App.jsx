import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";
import { Table } from "./components/Table.jsx";

function App() {
  const initialOperations = [
    {
      name: "Wypłata",
      amount: 1000,
      category: "Wypłata",
      date: "2025-02-02",
      operationType: "deposit",
      id: 1,
    },
    {
      name: "Czynsz",
      amount: 500,
      category: "Mieszkanie",
      date: "2025-02-03",
      operationType: "withdraw",
      id: 2,
    },
  ];
  const [operations, setOperations] = useState(initialOperations);
  const [balance, setBalance] = useState(0);

  const addOperation = (operation) => {
    const newOperation = { ...operation, id: Date.now() };
    setOperations([newOperation, ...operations]);
    if (operation.operationType === "withdraw")
      return setBalance(balance - operation.amount);
    else return setBalance(balance + operation.amount);
  };

  return (
    <>
      <div id="header">
        <h1>Manager wydatków</h1>
        <h2>Dostępne środki:</h2>
        <span
          id="showBalance"
          style={{
            color: balance > 0 ? "green" : balance < 0 ? "red" : "white",
          }}
        >
          {" "}
          💸 {balance} zł
        </span>
      </div>
      <Form onAddOperation={addOperation} />
      <Table operations={operations} />
    </>
  );
}

export default App;

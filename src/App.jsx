import "./App.css";
import { Form } from "./components/Form.jsx";
import { Table } from "./components/Table.jsx";

function App() {
  const operations = [
    {
      name: "Wypłata",
      amount: 1000,
      category: "Wypłata",
      data: "2025-02-02",
      id: 1,
    },
    {
      name: "Czynsz",
      amount: 500,
      category: "Mieszkanie",
      data: "2025-02-03",
      id: 2,
    },
  ];
  const balance = 0;

  return (
    <>
      <div id="showBalance">
        <h1>Manager wydatków</h1>
        <h2>Dostępne środki:</h2>
        <div> {balance} zł</div>
      </div>
      <hr />
      <Form />
      <hr />
      <Table operations={operations} />
    </>
  );
}

export default App;

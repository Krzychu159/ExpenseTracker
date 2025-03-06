import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddOperation }) => {
  const today = new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(today);
  const [operationType, setOperationType] = useState("withdraw");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddOperation({ name, amount, category, date, operationType });
      }}
    >
      <div>
        <p>Dodaj operacje:</p>
        <input
          type="radio"
          name="operationType"
          value="withdraw"
          defaultChecked
          onChange={(e) => setOperationType(e.target.value)}
        />{" "}
        Wydatek
        <input
          type="radio"
          name="operationType"
          value="deposit"
          onChange={(e) => setOperationType(e.target.value)}
        />{" "}
        Wpłata
      </div>
      <div id="formData">
        <div className="formElement">
          <div className="inputDiv">
            <label htmlFor="name">Nazwa </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="category">Kategorira </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="formElement">
          <div className="inputDiv">
            <label htmlFor="amount">Kwota </label>
            <input
              type="number"
              id="amount"
              style={{ minWidth: "150px" }} /* 🔹 Minimalna szerokość pola */
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="date">Data </label>
            <input
              type="date"
              id="category"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label> &nbsp;</label>
            <button>Dodaj</button>
          </div>
        </div>
      </div>
    </form>
  );
};

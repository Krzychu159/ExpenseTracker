export const Form = () => {
  return (
    <div>
      <div>
        <p>Dodaj operacje:</p>
        <input type="checkbox" /> Wydatek
        <input type="checkbox" /> Wpłata
      </div>
      <div>
        <label htmlFor="name">Nazwa </label>
        <input type="text" id="name" />
        <label htmlFor="amount">Kwota </label>
        <input type="number" id="amount" />
        <label htmlFor="category">Kategorira </label>
        <input type="text" id="category" />
        <label htmlFor="category">Data </label>
        <input type="date" id="category" />
      </div>
    </div>
  );
};

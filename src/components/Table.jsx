import "./Table.css";

export const Table = ({ operations }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Kwota</th>
          <th>Kategoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {operations.map((operation) => (
          <tr key={operation.id}>
            <td>{operation.name}</td>
            <td>{operation.amount} zł</td>
            <td>{operation.category}</td>
            <td>{operation.data}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

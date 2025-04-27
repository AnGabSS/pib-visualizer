interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: string[];
}

const Table = ({ data, columns }: Props) => {
  return (
    <table className="w-1/2">
      <thead className="bg-emerald-500 text-white border-b-2 border-solid border-emerald-500">
        <tr>
          {columns.map((column) => (
            <th key={column} className="w-1/2 px-6 py-2">
              {column.charAt(0).toUpperCase() + column.slice(1).toLowerCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="border-b-1 border-solid border-emerald-500"
          >
            {columns.map((column) => (
              <td key={column} className="px-6 py-2">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

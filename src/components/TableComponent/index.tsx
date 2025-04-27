interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: string[];
}

const Table = ({ data, columns }: Props) => {
  return (
    <table>
      <thead className="bg-green-500 text-white">
        <tr>
          {columns.map((column) => (
            <th key={column} className="w-1/2">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="divide-x-1 divide-solid divide-green-500">
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

import { ColumnInterface } from "@/types/ColumnInterface";
import { useEffect, useState } from "react";
import PaginationNav from "../PaginationNav";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: ColumnInterface[];
}

const Table = ({ data, columns }: Props) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setTotalPages(Math.floor(data.length / 8));
  },[])


  return (
    <div className="w-[90%] md:w-[70%] h-full flex flex-col justify-center items-center">
      <div className="w-full h-full rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-emerald-500 text-white border-b-2 border-solid border-emerald-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-2 md:px-9 md:py-3">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice((page - 1) * 8).map((row) => (
              <tr
                key={row.id}
                className="border-b border-solid border-orange-500/70 divide-x divide-solid divide-orange-500/10 hover:bg-orange-500/10"
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-2 md:px-9 md:py-3">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
      <PaginationNav page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default Table;

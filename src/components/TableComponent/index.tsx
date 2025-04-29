import { ColumnInterface } from "@/types/ColumnInterface";
import { useEffect, useState } from "react";
import PaginationNav from "../PaginationNav";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: ColumnInterface[];
  className?: string;
  style?: React.CSSProperties;
}

const TableComponent = ({ data, columns, className, style }: Props) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(8);

  useEffect(() => {
    const newTotalPages = Math.ceil(data.length / pageSize);
    setTotalPages(newTotalPages);
    //Reset for the first page when the pageSize or data changes
    //Reinicia para a primeira página quando a páginaSize ou os dados mudam
    setPage(1);
  }, [data.length, pageSize]);

  useEffect(() => {
    setOffset((page - 1) * pageSize);
  }, [page, pageSize]);

  return (
    <div
      className={`w-[90%] md:w-[80%] p-6 flex flex-col justify-center items-center ${className}`}
      style={style}
    >
      <div className="w-full rounded-xl overflow-hidden overflow-x-auto mb-4">
        <table className="w-full ">
          <thead className="bg-emerald-500 text-white border-b-2 border-solid border-emerald-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-2 text-md md:text-2xl">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(offset, offset + pageSize).map((row) => (
              <tr
                key={row.id}
                className="border-b border-solid border-orange-500/70 divide-x divide-solid divide-orange-500/10 hover:bg-orange-500/10 transition delay-20 duration-100 ease-in-out hover:shadow-xl"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-2 md:px-9 md:py-3 text-sm md:text-xl"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationNav
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        pagesPerView={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default TableComponent;

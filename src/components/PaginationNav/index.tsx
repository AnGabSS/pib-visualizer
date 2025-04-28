interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
    pagesPerView?: number;
  }
  
  const PaginationNav = ({ page, totalPages, onPageChange, pagesPerView = 4 }: PaginationProps) => {
    const startPage = Math.floor((page - 1) / pagesPerView) * pagesPerView + 1;
    const endPage = Math.min(startPage + pagesPerView - 1, totalPages);
  
    return (
      <nav className="flex justify-center items-center gap-2 py-4">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={`px-3 py-1 rounded-md ${
            page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}
        >
          {"<"}
        </button>
  
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-3 py-1 rounded-md ${
              pageNumber === page ? "bg-orange-500 text-white" : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {pageNumber}
          </button>
        ))}
  
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={`px-3 py-1 rounded-md ${
            page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}
        >
          {">"}
        </button>
      </nav>
    );
  };
  
  export default PaginationNav;
  
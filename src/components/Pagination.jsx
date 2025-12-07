import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-4 border-t border-gray-200 bg-white">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-8 h-8 flex items-center justify-center text-sm rounded ${
            currentPage === page
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
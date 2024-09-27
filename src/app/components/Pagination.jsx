"use client";

export default function Pagination({ page, setPage, hasMore }) {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)} disabled={!hasMore}>
        Next
      </button>
    </div>
  );
}

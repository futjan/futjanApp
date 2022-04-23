import React, { useEffect, useState, memo } from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setPageCount(Math.ceil(props.totalDocs / props.itemsPerPage));
    props.action();
  }, [props.currentPage, props.itemsPerPage, props.totalDocs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    props.setCurrentPage((event.selected + 1) * 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="pagination"
    />
  );
};

export default memo(Pagination);

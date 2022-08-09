/*

  Reusable Component
  
*/

import React from "react";
import { Pagination as PaginationReactBootstrap } from "react-bootstrap";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (
    let number = 1;
    number <= Math.ceil(totalItems / itemsPerPage);
    number++
  ) {
    pageNumbers.push(
      <PaginationReactBootstrap.Item
        key={number}
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </PaginationReactBootstrap.Item>
    );
  }
  return (
    <div>
      <PaginationReactBootstrap className="justify-content-center" size="md">
        {pageNumbers}
      </PaginationReactBootstrap>
    </div>
  );
};

export default Pagination;

import React, { Fragment, useState } from "react";
import classes from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

const Pagination = ({ total, limit, handleCurrentPage, currentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [spans, setSpans] = useState(document.getElementsByTagName("span"));
  const pagesCount = Math.ceil(total / limit);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(spans);
  // if (currentPage === 1)
  //   return (
  //     <div>
  //       <span>{currentPage}</span>
  //       <span>...</span>
  //       <span>{currentPage + 1}</span>
  //     </div>
  //   );

  // const setPage = (page) => {
  //   setCurrentPage(page);
  //   onCurrentPage(page);
  // };

  // const range = (from, to, step = 1) => {
  //   let i = from;
  //   const range = [];

  //   while (i <= to) {
  //     range.push(i);
  //     i += step;
  //   }

  //   return range;
  // };

  // const fetchPageNumbers = () => {
  //   const totalNumbers = pageNeighbours * 2 + 3;
  //   const totalBlocks = totalNumbers + 2;

  //   if (pagesCount > totalBlocks ) {
  //     const startPage = Math.max(2, currentPage - pageNeighbours)
  //     const endPage = Math.min(pagesCount - 1, currentPage + pageNeighbours)
  //   }
  // };

  return (
    <div className={classes.Pagination}>
      {pages.map((page) => (
        <span
          onClick={() => handleCurrentPage(page)}
          className={currentPage === page && classes.activeClass}
        >
          {page}
        </span>
      ))}
    </div>
  );

  // if (currentPage - 3 < 0)
  //   return (
  //     <div>
  //       <span>{pages[1]}</span>
  //       <span>{pages[pages.length]}</span>
  //     </div>
  //   );
};

export default Pagination;

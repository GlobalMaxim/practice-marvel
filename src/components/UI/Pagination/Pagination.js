import React, { Fragment, useEffect, useState } from "react";
import classes from "./Pagination.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Pagination = ({ total, limit, handleCurrentPage, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    minimalizePages(currentPage);
  }, [currentPage]);

  const minimalizePages = (currentPage) => {
    const pagesArr = [];
    handleCurrentPage(currentPage);
    if (currentPage - 3 < 0) {
      pagesArr.push(currentPage);
      pagesArr.push(currentPage + 1);
      pagesArr.push(currentPage + 2);
      pagesArr.push(currentPage + 3);
      pagesArr.push("...");
      pagesArr.push(pagesCount);
    } else if (currentPage + 3 > total) {
      pagesArr.push(1);
      pagesArr.push("...");
      pagesArr.push(currentPage - 3);
      pagesArr.push(currentPage - 2);
      pagesArr.push(currentPage - 1);
      pagesArr.push(currentPage);
    } else {
      pagesArr.push(1);
      pagesArr.push("...");
      pagesArr.push(currentPage - 3);
      pagesArr.push(currentPage - 2);
      pagesArr.push(currentPage - 1);
      pagesArr.push(currentPage);
      pagesArr.push(currentPage + 1);
      pagesArr.push(currentPage + 2);
      pagesArr.push(currentPage + 3);
      pagesArr.push("...");
      pagesArr.push(pagesCount);
    }
    setPages(pagesArr);
  };

  console.log(typeof currentPage);

  const showPagination = () =>
    pages?.length
      ? pages.map((page) => (
          <span
            onClick={() => {
              if (typeof page === "number") {
                minimalizePages(page);
              } else {
              }
            }}
            className={currentPage === page && classes.activeClass}
          >
            <NavLink to={"characters?page=" + page}>{page}</NavLink>
          </span>
        ))
      : null;

  return <div className={classes.Pagination}>{showPagination()}</div>;
  {
    /* <NavLink to={"characters?page=" + page}></NavLink>; */
  }
};
Pagination.propTypes = {
  page: PropTypes.number,
};

export default Pagination;

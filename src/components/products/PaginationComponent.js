import React, { useEffect, useState } from "react";
import "./style.css";
import "./product.css";

// import axios from "axios";

import apiJSON from "./../../API.json";

import { NavLink } from "react-router-dom";
const renderData = (data) => {

  const listItems = data.map((item) => (
    
            <NavLink to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
      <div className="card" key={item.id}>
        <div className="card_img">
          <img
            src={`${apiJSON.API_URL}public/images/` + item.mainImage}
            alt=""
          />
        </div>
        <div className="card_header">
          <h2>{item.name}</h2>
          {/* <p>{item.description}</p> */}
        </div>
      </div>
    </NavLink>
    
          

    
  ));

  return (
    <div className="prod-div-center">
          <div className="main_content">
      {listItems}
    </div>
      </div> 
  );
};

function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);

  const [pageNumberLimit] = useState(20);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(20);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li 
          key={number}
          id={number}
          onClick={handleClick}
          
          className={currentPage === number ? "active page-pagination" : null}
          
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch(`${apiJSON.API_URL}api/getallprod`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // let pageIncrementBtn = null;
  // if (pages.length > maxPageNumberLimit) {
  //   pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  // }

  // let pageDecrementBtn = null;
  // if (minPageNumberLimit >= 1) {
  //   pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  // }

  // const handleLoadMore = () => {
  //   setitemsPerPage(itemsPerPage + 16);
  // };

  return (
    <>
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li className="btn-page">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            &#11164;
          </button>
        </li>
        {renderPageNumbers}

        <li className="page-pagination">
          <button
            onClick={handleNextbtn}
            className="new"
            disabled={currentPage === pages[pages.length - 1] ? true : false
            }
          >
            &#11166;
          </button>
        </li>
      </ul>
    </>
  );
}

export default PaginationComponent;
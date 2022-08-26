import React from "react";
import { Footer } from "./../footer/Footer";
import PaginationComponent from "./PaginationComponent";
import { ProductBann } from "./ProductBann";

export const Products = () => {
  return (
    <>
      <PaginationComponent />
      <ProductBann />
      <Footer />
    </>
  );
};
//import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Spinner } from "./../spinner/Spinner";
// import axios from "axios";
// import "./product.css";
// import apiJSON from "./../../API.json";

// const [spinner, setSpinner] = React.useState(false);
// const [data, setData] = React.useState([]);
// useEffect(() => {
//   // window.scrollTo(0, 0);
//   setSpinner(true);

//   axios.get(`${apiJSON.API_URL}api/getallprod`).then((r) => {
//     r.data.sort(function (a, b) {
//       var textA = a.type;
//       var textB = b.type;
//       return textA < textB ? -1 : textA > textB ? 1 : 0;
//     });
//     console.log(r.data);
//     // setData(r.data)
//     if (localStorage.getItem("lang") === "ru") {
//       setData(
//         r.data.filter((item) => [
//           item,
//           (item.name = item.nameRU),
//           (item.description = item.descriptionRU),
//         ])
//       );
//     } else if (localStorage.getItem("lang") === "en") {
//       setData(r.data);
//     } else
//       setData(
//         r.data.filter((item) => [
//           item,
//           (item.name = item.nameGE),
//           (item.description = item.descriptionGE),
//         ])
//       );
//     setSpinner(false);
//   });
// }, []);

// const listItems = data.map((item) => (
//   <NavLink to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
//     <div className="card" key={item.id}>
//       <div className="card_img">
//         <img
//           src={`${apiJSON.API_URL}public/images/` + item.mainImage}
//           alt=""
//         />
//       </div>
//       <div className="card_header">
//         <h2>{item.name}</h2>
//         {/* <p>{item.description}</p> */}
//       </div>
//     </div>
//   </NavLink>
// ));
//<div className="prod-div-center">
//        {spinner ? (
//          <>
//            <div style={{ height: 500 }}></div>
//            <Spinner />
//          </>
//       ) : (
//          <div className="main_content">{listItems}</div>
//        )}
//      </div>
//<div>
//        <h1
//          style={{
//            textAlign: "left",
//            alignItems: "left",
//            fontFamily: "Gowun Dodum",
//            borderLeft: "4px solid #009073",
//            paddingLeft: 15,
//          }}
//        >
//          Other type of products
//        </h1>
//      </div>
//<ProductBann />
//      <div style={{ marginBottom: 20 }}></div>
//      <Footer />

import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Spinner } from "../../spinner/Spinner";

import apiJSON from "./../../../API.json";

import { ProductBann } from "../ProductBann";

import { useTranslation } from "react-i18next";

export const Groups = ({ match }) => {
  const { t } = useTranslation();
  const [spinner, setSpinner] = React.useState(false);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setSpinner(true);
    axios
      .get(`${apiJSON.API_URL}api/getconcrettypeprod/${match.params.group_id}`)
      .then((r) => {
        setData(r.data);

        setSpinner(false);
      });
  }, [match.params.group_id]);
  const listItems = data.map((item) =>
  
    item.products.length > 0 ? (
      item.products
        .sort(function (a, b) {
          var textA = a.type;
          var textB = b.type;
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        })
                
        .map((item) => {
          item.unicProduct && console.log(item.unicProduct);
          let namer;
          if (localStorage.getItem("lang") === "ru") {
              namer=item.nameRU;
          } else if (localStorage.getItem("lang") === "en") {
            namer=item.name;
          } else
          namer=item.nameGE;
          return (
            <NavLink
              to={`/products/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card" key={item.id}>
                <div className="card_img">
                  <img
                    src={`${apiJSON.API_URL}public/images/` + item.mainImage}
                    alt=""
                  />
                </div>
                <div className="card_header">
                  <h2>{namer}</h2>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
            </NavLink>
          );
        })
    ) : (
      <h1 style={{ color: "#fff", fontSize: 70, textAlign: "center", margin:"auto" }}>
               {t("dont have products")}
      </h1>
    )
  );
  return (
    <>
      <div className="prod-div-center">
        {spinner ? (
          <>
            <div style={{ height: 500 }}></div>
            <Spinner />
          </>
        ) : (
          <div className="main_content">
            {/* {console.log(data)} */}
            {listItems}
          </div>
        )}
      </div>
      <ProductBann />
      <div style={{ marginBottom: 20 }}></div>
      <Footer />
    </>
  );
};

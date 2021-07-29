import React from "react";
import gondol from "../images/a.jpg";
import gondol1 from "../images/b.jpg";
import "./Services.css";
import { Link } from "react-router-dom";
function Services() {
  return (
    <>
      <div id="services">
        <h1>Xizmat va Narxlar</h1>
        <div className="services">
          <div className="services_box">
            <div className="img_box">
              <img
                src={gondol}
                alt="nagap"
                width="290px"
                height="290px"
                title="mahsulot"
              ></img>
            </div>
            <p>
              Poligrafiya va dizayn maket xizmati.
              <br />
              Vizitkalar Taklifnomalar
              <br />
              Logotiplar
              <br />
              Bukletlar
              <br />
              Fleyerlar
              <br />
            </p>
            <Link to="costs">
              <button>
                <b>Narxlar</b>
              </button>
            </Link>
          </div>
          <div className="services_box">
            <div className="img_box">
              <img
                src={gondol1}
                alt="nagap"
                width="290px"
                height="290px"
                title="mahsulot"
              ></img>
            </div>
            <p>
              Rasm va video montaj Xizmati
              <br />
              Videosiyomka
              <br />
              Fotosiyomka
              <br />
              Montaj
              <br />
              Har xil turdagi video roliklar
            </p>
            <Link to="costs1">
              <button>
                <b>Narxlar</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Favourite = () => {
  const [fav, setfav] = useState([]);
  const getAllProp = async () => {
    try {
      const properties = await axios.get("http://localhost:8009/favourite");
      // console.log(properties.data)
      setfav(properties.data);
    } catch (error) {
      console.log(`get error is ${error}`);
    }
  };
  useEffect(() => {
    getAllProp();
  });
  return (
    <div>
      <div className="firstContainer">
        <h2>Search properties to rent</h2>
      </div>

      <div className="secondContainer"></div>

      <div className="container">
        {fav.map((data, i) => {
          return (
            <>
              <div className="card" key={i}>
                <div className="card_img">
                  <img className="prop_img" src={data.image} alt="properties" />
                </div>
                <p
                  className="data"
                  style={{
                    borderBottom: "1px solid rgb(88, 82, 212)",
                    display: "inline-block",
                    marginBottom: "15px",
                  }}
                >
                  <strong style={{ color: "rgb(88, 82, 212)" }}>
                    {data.price}₹
                  </strong>
                  /month
                </p>
                <h3 className="data">{data.title}</h3>
                <p className="data">{data.location}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;

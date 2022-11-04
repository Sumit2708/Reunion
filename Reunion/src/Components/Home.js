import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [estate, setEstate] = useState([]);
  const [search, setSearch] = useState({
    location: "",
    date: "",
    price: "",
    property_type: "",
  });
  const getAllProp = async () => {
    try {
      const properties = await axios.get("http://localhost:8009/estates");
      // console.log(properties.data)
      setEstate(properties.data);
    } catch (error) {
      console.log(`get error is ${error}`);
    }
  };
  useEffect(() => {
    getAllProp();
  });

  const boxSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const finalSearch = () => {
    let loc = estate.filter((ele) => ele.location == search.location);
    setEstate([...loc]);
    let date = estate.filter((ele) => ele.date == search.date);
    setEstate([...date]);

    let price = estate.filter((ele) => ele.price >= search.price);
    setEstate([...price]);

    let property_type = estate.filter(
      (ele) => ele.date == search.property_type
    );
    setEstate([...property_type]);
  };
  return (
    <>
      <div className="firstContainer">
        <h2>Search properties to rent</h2>
        <input
          type={"search"}
          placeholder="Search with Search Bar"
          onChange={boxSearch}
        />
      </div>

      <div className="secondContainer">
        <div className="dropdown">
          <label for="location">Location</label>
          <select name="location" onChange={boxSearch}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="England">England</option>
            <option value="Austrila">Austrila</option>
          </select>
        </div>

        <div className="dropdown">
          <label>When</label>
          <input type={"date"} name="date" onChange={boxSearch} />
        </div>

        <div className="dropdown">
          <label for="price">Price</label>
          <select name="price" onChange={boxSearch}>
            <option value="20000">20000</option>
            <option value="40000">40000</option>
            <option value="50000">50000</option>
            <option value="60000">60000</option>
          </select>
        </div>

        <div className="dropdown">
          <label for="property_Type">Property Type</label>
          <select name="property_Type" onChange={boxSearch}>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Hotel">Residency</option>
          </select>
        </div>

        <div className="dropdown">
          <button className="search" onClick={finalSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="container">
        {estate.map((data, i) => {
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
    </>
  );
}

export default Card;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const [val, setval] = useState({
    image: "",
    price: "",
    title: "",
    location: "",
    avilable_date: "",
    property_type: "",
  });
const history = useNavigate()

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setval((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8009/favourite", val);
      alert('property added')
      history('/Favourite_property')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <form>
        <h3 className="selling_heading">
          Fill This Form to Register Your Property
        </h3>
        <input
          type={"file"}
          name="image"
          placeholder="Property Image"
          value={val.image}
          onChange={(e) => handleChnage(e)}
        />
        <input
          type={"number"}
          name="price"
          placeholder="Price of Property"
          value={val.price}
          onChange={(e) => handleChnage(e)}
        />
        <input
          type={"text"}
          name="title"
          placeholder="Name of Property"
          value={val.title}
          onChange={(e) => handleChnage(e)}
        />
        <input
          type={"text"}
          name="location"
          placeholder="Address of Property"
          value={val.location}
          onChange={(e) => handleChnage(e)}
        />
        <input type={"date"} name="avilable_date" onChange={(e) => handleChnage(e)} />
        <select name="property_type" value={val.property_type} onChange={(e) => handleChnage(e)}>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Hotel">Residency</option>
        </select>
        <button onClick={(e)=>handleSubmit(e)}>Submit Details</button>
      </form>
    </div>
  );
};

export default Sell;

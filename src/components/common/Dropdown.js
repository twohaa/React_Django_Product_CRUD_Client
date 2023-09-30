import React, { useEffect, useState } from "react";
import axios from "axios";

const Dropdown = () => {
  const [categoryy, setCategoryy] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  const getCategory = async () => {
    const response = await axios.get("http://localhost:8000/api/category/");
    console.log(response.data);
    setCategoryy(response.data);
  };

  const getSubCategory = async () => {
    const response = await axios.get("http://localhost:8000/api/subcategory/");
    console.log(response.data);
    setSubCategory(response.data);
  };

  useEffect(() => {
    getCategory();
    getSubCategory();
  }, []);

  const handleCategory = (id) => {
    const dt = subcategory.filter(
      (subcat) => parseInt(subcat.category) === parseInt(id)
    );
    setSubCategory(dt);
  };

  return (
    <div className="container">
      <h1 className="text-center">Dropdown</h1>
      <div>
        <select
          id="ddlcategory"
          className="form-control select-class"
          onChange={(e) => handleCategory(e.target.value)}
        >
          <option value="0">Select Category</option>
          {categoryy && categoryy !== undefined
            ? categoryy.map((cat, index) => {
                return (
                  <option key={index} value={cat.id}>
                    {cat.name}
                  </option>
                );
              })
            : "No Category"}
        </select>
        <br />
        <select id="ddlsubcategory" className="form-control">
          <option value="0">Select Subcategory</option>
          {subcategory && subcategory !== undefined
            ? subcategory.map((subcat, index) => {
                return (
                  <option key={index} value={subcat.id}>
                    {subcat.name}
                  </option>
                );
              })
            : "No Subcategory"}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;

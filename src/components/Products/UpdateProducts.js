import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProducts = () => {
  const [image, setImage] = useState(null);
  const [productType, setProductType] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [unit, setUnit] = useState("");
  const [tax, setTax] = useState("");
  const [taxMethod, setTaxMethod] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState();

  const loadproducts = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}/`
    );
    // console.log(data);
    setImage(data.image);
    setProductType(data.productType);
    setProductCode(data.productCode);
    setProductName(data.productName);
    setCategory(data.category);
    setBrand(data.brand);
    setUnit(data.unit);
    setTax(data.tax);
    setTaxMethod(data.taxMethod);
  };

  useEffect(() => {
    loadproducts();
  }, []);

  const UpdateProductInfo = async () => {
    let formfield = new FormData();
    formfield.append("productType", productType);
    formfield.append("productCode", productCode);
    formfield.append("productName", productName);
    formfield.append("category", category);
    formfield.append("brand", brand);
    formfield.append("unit", unit);
    formfield.append("tax", tax);
    formfield.append("taxMethod", taxMethod);
    if (image !== null) {
      formfield.append("image", image);
    }

    await axios({
      method: "PUT",
      url: `http://localhost:8000/api/products/${id}/`,
      data: formfield,
    })
      .then((response) => {
        // console.log(response.data);
        setMessage(response.success);
        navigate("/showproducts");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div>
      <div className="container my-3">
        <h1 className="subTitle">Update Product</h1>

        <p className="text-success">{message}</p>

        <div className="form-group">
          {/* Product Type */}
          <div className="form-group my-2">
            <label>Enter Product Type : </label>
            <select
              className="form-control from-control-lg"
              name="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Select Product Type</option>
              <option value="Standard">Standard</option>
              <option value="Service">Service</option>
              <option value="Combination">Combination</option>
            </select>
          </div>
          {/* Product Code  */}
          <div className="form-group my-2">
            <label>Enter Product Code : </label>
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Product Code"
              name="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
            />
          </div>
          {/* Product Name  */}
          <div className="form-group my-2">
            <label>Enter Product Name : </label>
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Product Name"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          {/* Category  */}
          <div className="form-group">
            <label>Enter Product Category : </label>
            <select
              className="form-control from-control-lg"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Laptop">Laptop</option>
              <option value="Computer">Computer</option>
              <option value="Mobile">Mobile</option>
              <option value="Apple">Apple</option>
            </select>
            {/* <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Product Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
          </div>
          {/* Brand  */}
          <div className="form-group my-2">
            <label>Enter Product Brand : </label>
            <select
              className="form-control from-control-lg"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Vivo">Vivo</option>
              <option value="Nokia">Nokia</option>
            </select>
          </div>
          {/* Unit  */}
          <div className="form-group my-2">
            <label>Enter Product Unit : </label>
            <select
              className="form-control from-control-lg"
              name="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">Select Unit</option>
              <option value="Kilogram">Kilogram</option>
              <option value="Gram">Gram</option>
              <option value="Quintal">Quintal</option>
              <option value="Tonne">Tonne</option>
            </select>
          </div>
          {/* Tax  */}
          <div className="form-group my-2">
            <label>Enter Product Tax % : </label>
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Product Tax %"
              name="tax"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </div>
          {/* Tax Method */}
          <div className="form-group my-2">
            <label>Enter Product Tax Method : </label>
            <select
              className="form-control from-control-lg"
              name="taxMethod"
              value={taxMethod}
              onChange={(e) => setTaxMethod(e.target.value)}
            >
              <option value="">Select Tax Method</option>
              <option value="Earn">Earn</option>
              <option value="Buy">Buy</option>
              <option value="Own">Own</option>
            </select>
          </div>
          {/* Image  */}
          <div className="form-group my-2">
            <label>Choose Product Image : </label>
            <input
              type="file"
              className="form-control from-control-lg"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button className="btn btn-success mt-3" onClick={UpdateProductInfo}>
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;

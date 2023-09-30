import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}/`
    );
    // console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/products/${id}/`);
    navigate("/showproducts");
  };

  return (
    <div>
      <h1 className="subTitle">Product Details</h1>
      <div className="single-product-info">
        <hr />
        <img src={product.image} alt="" height="100" width="100" />
        <hr />
        <h2>Product Name : {product.productName}</h2>
        <hr />
        <p>Product Type : {product.productType}</p>
        <hr />
        <p>Product Code : {product.productCode}</p>
        <hr />
        <p>Product Category : {product.category}</p>
        <hr />
        <p>Product Brand : {product.brand}</p>
        <hr />
        <p>Product Unit : {product.unit}</p>
        <hr />
        <p>Product Tax : {product.tax} %</p>
        <hr />
        <p>Product Tax Method : {product.taxMethod}</p>
        <hr />
        <p>Created Date : {product.date}</p>
        <hr />

        <Link className="btn btn-primary mx-2" to={`/${product.id}/update`}>
          Update
        </Link>
        <Link
          className="btn btn-danger mx-2"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetail;

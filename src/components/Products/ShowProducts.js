import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerpage = 3;
  const lastIndex = currentPage * dataPerpage;
  const firstIndex = lastIndex - dataPerpage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / dataPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCurrPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="all-products">
      <h1 className="subTitle">All Products</h1>

      <div className="d-grid d-md-flex justify-content-md-end mb-3">
        <Link to="/addProduct" className="btn btn-warning btn-lg">
          Add Product
        </Link>
      </div>

      <div className="products-card-info">
        {records.map((p, index) => {
          return (
            <div key={index}>
              <Card
                className="m-2 rounded shadow-lg"
                style={{ width: "20rem" }}
              >
                <img variant="top" src={p.image} alt="" />
                <Card.Body>
                  <Card.Title>{p.productName}</Card.Title>
                  <Card.Text>{p.productType}</Card.Text>
                  {/* <Card.Text>{p.productCode}</Card.Text> */}
                  <Card.Text>{p.category}</Card.Text>
                  {/* <Card.Text>{p.brand}</Card.Text> */}
                  {/* <Card.Text>{p.unit}</Card.Text> */}
                  <Card.Text>{p.tax}</Card.Text>
                  {/* <Card.Text>{p.taxMethod}</Card.Text> */}
                  {/* <Card.Text>{p.date}</Card.Text> */}

                  <Link className="btn btn-primary" to={`/${p.id}/`}>
                    Show Details
                  </Link>
                  <Link className="btn btn-success mx-2" to={`/${p.id}/update`}>
                    Update
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      <nav className="container page">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prevPage}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <button className="page-link" onClick={() => changeCurrPage(n)}>
                  {n}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShowProducts;

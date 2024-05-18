import React from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  const productList = Array.isArray(products) ? products : [products];
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex flex-nowrap overflow-auto">
          {productList.map((product) => (
            <div key={product.id} className="col-sm-4 mb-4">
              <a href=" " className="text-decoration-none">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

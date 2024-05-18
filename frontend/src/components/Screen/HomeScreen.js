import React, { useState, useEffect } from "react";
import Product from "../Product";
import DetailScreen from "./DetailScreen";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";



function HomeScreen() {
  const [product, setProducts] = useState([]);
  // const {id} = useParams();

  useEffect(() => {
    fetch("http://localhost:7000/api/products/list/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      
      <h1>Welcome to the Home Screen</h1>
      <h2>Products List:</h2>
      <Link to="product?id"></Link>
      <ul>
        {product.map((product) => (
          <Product products={product} />
        ))}
      </ul>
      {/* <DetailScreen id={id} />  */}
      
        
    </div>
  );
}

export default HomeScreen;

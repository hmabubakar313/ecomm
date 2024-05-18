import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";


function DetailScreen(){
  const {id} = useParams();
  console.log("id", id);
  const [product, setProducts] = useState([]);
  
  

  useEffect(() => {
    fetch("http://localhost:7000/api/products/list/")
      .then((response) => response.json())
      .then((data) => {
        console.log("data",data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  if (!product)
    {
      return <div>
        No Product Found
      </div>
    }
  return (
    
    <div>
      <h1>Welcome to the Home Screen</h1>
      <h2>Products List:</h2>

      <ul>
        
      </ul>
        
    </div>
  );
}

export default DetailScreen;

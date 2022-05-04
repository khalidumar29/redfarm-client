import React, { useEffect, useState } from "react";
import InvnetoryProducts from "./InvnetoryProducts/InvnetoryProducts";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className='container py-lg-3 '>
      <h1 className='py-3' style={{ color: "#780709" }}>
        Inventory Product
      </h1>
      <div className='d-flex flex-wrap '>
        {products.slice(0, 6).map((product) => (
          <InvnetoryProducts
            key={product.id}
            product={product}
          ></InvnetoryProducts>
        ))}
      </div>
    </div>
  );
};

export default Inventory;

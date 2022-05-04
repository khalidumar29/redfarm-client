import React from "react";
import UseAllProducts from "../../../Hooks/UseAllProducts";
import InvnetoryProducts from "./InvnetoryProducts/InvnetoryProducts";

const Inventory = () => {
  const [products] = UseAllProducts();
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

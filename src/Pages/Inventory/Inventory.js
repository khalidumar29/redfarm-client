import React from "react";
import UseAllProducts from "../../Hooks/UseAllProducts";
import InvnetoryProducts from "../Home/InventorySection/InvnetoryProducts/InvnetoryProducts";
const Inventory = () => {
  const [products] = UseAllProducts();
  return (
    <div className='mt-2 container d-flex flex-wrap justify-content-lg-between'>
      {products.map((product) => (
        <InvnetoryProducts
          key={product.id}
          product={product}
        ></InvnetoryProducts>
      ))}
    </div>
  );
};

export default Inventory;

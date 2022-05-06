import React from "react";
import { Spinner } from "react-bootstrap";
import UseAllProducts from "../../Hooks/UseAllProducts";
import DynamicTitle from "../../Shared/DynamicTitle/DynamicTitle";
import InvnetoryProducts from "../Home/InventorySection/InvnetoryProducts/InvnetoryProducts";
const Inventory = () => {
  const [products] = UseAllProducts();
  if (products.length === 0 || products.length < 0) {
    return (
      <>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  }
  return (
    <div className='mt-2 container d-flex flex-wrap justify-content-lg-between'>
      <DynamicTitle key={"wrf"} title={"| inventory"}></DynamicTitle>

      {products.map((product) => (
        <InvnetoryProducts
          key={product._id}
          product={product}
        ></InvnetoryProducts>
      ))}
    </div>
  );
};

export default Inventory;

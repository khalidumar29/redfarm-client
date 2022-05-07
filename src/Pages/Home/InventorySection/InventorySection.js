import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAllProducts from "../../../Hooks/UseAllProducts";
import InvnetoryProducts from "./InvnetoryProducts/InvnetoryProducts";

const Inventory = () => {
  const [products] = UseAllProducts();
  if (products.length < 1) {
    return (
      <>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  }
  return (
    <div className='container py-lg-3 '>
      <h1 className='py-3' style={{ color: "#780709" }}>
        Inventory Product
      </h1>
      <div className='d-flex justify-content-center flex-wrap '>
        {products.slice(0, 6).map((product) => (
          <InvnetoryProducts
            key={product._id}
            product={product}
          ></InvnetoryProducts>
        ))}
      </div>
      <Link className='btn btn-primary' to={"/manageinventories"}>
        Manage Inventories
      </Link>
    </div>
  );
};

export default Inventory;

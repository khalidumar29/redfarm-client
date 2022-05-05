import React from "react";
import { useParams } from "react-router-dom";
import UseProductsDetails from "../../Hooks/UseProductsDetails";
import "./ProductDetails.css";
import { IoMdSend } from "react-icons/io";
import { Button } from "react-bootstrap";
const ProductDetails = () => {
  const { id } = useParams();
  const [productsDetails] = UseProductsDetails(id);

  return (
    <div className='container py-3 d-flex align-items-top'>
      <div className='product-img'>
        <img className='w-100' src={productsDetails.image} alt='' />
      </div>
      <div style={{ textAlign: "left" }}>
        <h4>{productsDetails.name}</h4>
        <p style={{ fontSize: "11px", color: "#555050" }} disable>
          id: {productsDetails._id}
        </p>
        <p>
          supplied by{" "}
          <span style={{ fontWeight: 500 }}>
            {productsDetails.supplierName}
          </span>
        </p>
        <p>
          Price: <span>$</span>
          {productsDetails.price}
        </p>
        <p>quantity: {productsDetails.quantity}</p>
        <p>{productsDetails.description}</p>
        <Button className='btn btn-primary'>
          Delivered
          <IoMdSend className='ms-2' />
        </Button>{" "}
      </div>
    </div>
  );
};

export default ProductDetails;

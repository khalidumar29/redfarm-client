import React from "react";
import { useParams } from "react-router-dom";
import UseProductsDetails from "../../Hooks/UseProductsDetails";
import "./ProductDetails.css";
import { IoMdSend } from "react-icons/io";
import { Button } from "react-bootstrap";
const ProductDetails = () => {
  const { id } = useParams();
  const [productsDetails, setProductsDetails] = UseProductsDetails(id);

  const handleClick = (id) => {
    const newQuantity = {
      ...productsDetails,
      quantity:
        productsDetails["quantity"] > 0
          ? (productsDetails["quantity"] -= 1)
          : 0,
    };
    const url = `https://warehouse-management10.herokuapp.com/inventory/${id}
/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productsDetails),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    setProductsDetails(newQuantity);
  };
  const handleReStock = (e) => {
    e.preventDefault();
    const getStockValue = e.target.stock.value;
    const stock = parseInt(getStockValue);
    if (stock > 0) {
      const newQuantity = {
        ...productsDetails,
        quantity: (productsDetails.quantity += stock),
      };
      const url = `https://warehouse-management10.herokuapp.com/inventory/${id}
/${id}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productsDetails),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      setProductsDetails(newQuantity);
    }
    e.target.reset();
  };

  return (
    <div className='container py-3 d-flex align-items-top'>
      <div className='product-img'>
        <img className='w-100' src={productsDetails.image} alt='' />
      </div>
      <div style={{ textAlign: "left" }}>
        <h4>{productsDetails.name}</h4>
        <p style={{ fontSize: "11px", color: "#555050" }}>
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
        <Button onClick={() => handleClick(id)} className='btn btn-primary'>
          Delivered
          <IoMdSend className='ms-2' />
        </Button>{" "}
        <form onSubmit={handleReStock} className='py-3'>
          <label htmlFor='stock'> Restock Proudcts </label>
          <input className='d-block my-2 rounded' name='stock' type='number' />
          <input className='btn btn-dark' type='submit' value='Restock' />
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;

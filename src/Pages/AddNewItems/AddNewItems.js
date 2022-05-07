import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddNewItem.css";
import auth from "../../firebase.init";
const AddNewItems = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <>
        <Spinner animation='border' />
      </>
    );
  }
  const handleAddItems = (e) => {
    e.preventDefault();
    const name = e.target.productName.value;
    const image = e.target.imageUrl.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;
    const email = e.target.email.value;
    const productData = {
      name,
      image,
      description,
      price,
      quantity,
      supplierName,
      email,
    };
    console.log(productData);
    fetch("https://warehouse-management10.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        /** nothing to happen */
      });
    e.target.reset();
  };
  return (
    <div className='container d-flex flex-column justify-content-lg-center'>
      <div style={{ textAlign: "left" }} className='w-lg-50 mx-auto'>
        <h1 className='text-primary'>Add New Products</h1>
        <form
          className='add-items-form'
          style={{ textAlign: "" }}
          onSubmit={handleAddItems}
        >
          <label htmlFor='productName'>Product Name:</label>
          <br />
          <input className='w-75 py-2 my-lg-2' name='productName' type='text' />
          <br />
          <label htmlFor='imageUrl'>Image Url:</label>
          <br />
          <input className='w-75 py-2 my-2' name='imageUrl' type='text' />
          <br />
          <label htmlFor='description'>Description:</label>
          <br />
          <input
            className='w-75 py-2 my-2'
            name='description'
            type='text'
          />{" "}
          <br />
          <label htmlFor='price'>Price:</label>
          <br />
          <input className='w-75 py-2 my-2' name='price' type='number' />
          <br />
          <label htmlFor='quantity'>Quantity:</label>
          <br />
          <input className='w-75 py-2 my-2' name='quantity' type='number' />
          <br />
          <label htmlFor='supplierName'>Supplier Name:</label>
          <br />
          <input className='w-75 py-2 my-2' name='supplierName' type='text' />
          <br />
          <label htmlFor='email'>email:</label>
          <br />
          <input
            style={{
              background: "white",
              border: "1px solid black",
              color: "black",
            }}
            className='w-75 py-2 my-2'
            name='email'
            type='email'
            value={user?.email}
            readOnly
          />
          <br />
          <input
            style={{ textAlign: "left" }}
            className='mx-2 my-2 btn btn-primary'
            type='submit'
            value='Add items'
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewItems;

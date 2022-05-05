import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const InvnetoryProducts = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, price, quantity, supplierName } =
    product;
  const handleProductDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <Card
      className='my-3'
      style={{ width: "18rem", marginRight: "30px", textAlign: "left" }}
    >
      <Card.Img style={{ padding: "5px" }} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{supplierName}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{quantity}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button
          onClick={() => handleProductDetails(_id)}
          variant='primary'
          className='d-flex align-items-center'
        >
          <AiFillEdit className='me-2' /> Update
        </Button>
      </Card.Body>
    </Card>
  );
};

export default InvnetoryProducts;

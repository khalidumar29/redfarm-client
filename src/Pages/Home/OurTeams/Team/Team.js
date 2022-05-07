import React from "react";
import { Card } from "react-bootstrap";

const Team = ({ pic, des, name }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant='top' src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{des}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Team;

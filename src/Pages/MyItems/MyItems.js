import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import InvnetoryProducts from "../Home/InventorySection/InvnetoryProducts/InvnetoryProducts";
const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://warehouse-management10.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => {
        const myItems = data.filter((myItem) => myItem.email === user.email);
        setItems(myItems);
      });
  }, [user]);
  if (loading) {
    return (
      <>
        <Spinner animation='border' />
      </>
    );
  }
  return (
    <div className='container d-lg-flex flex-wrap'>
      {items.map((item) => (
        <InvnetoryProducts key={item._id} product={item}></InvnetoryProducts>
      ))}
    </div>
  );
};

export default MyItems;

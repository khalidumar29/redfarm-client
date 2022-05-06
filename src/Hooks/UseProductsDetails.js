import { useEffect, useState } from "react";

const UseProductsDetails = (id) => {
  const [productsDetails, setProductsDetails] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductsDetails(data);
      });
  }, [id]);
  return [productsDetails, setProductsDetails];
};
//https://warehouse-management10.herokuapp.com/inventory/${id}
export default UseProductsDetails;

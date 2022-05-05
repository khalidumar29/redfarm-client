import { useEffect, useState } from "react";

const UseProductsDetails = (id) => {
  const [productsDetails, setProductsDetails] = useState({});
  useEffect(() => {
    const url = `https://warehouse-management10.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductsDetails(data);
      });
  }, [id]);
  return [productsDetails, setProductsDetails];
};

export default UseProductsDetails;

import { useEffect, useState } from "react";

const UseAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-management10.herokuapp.com/inventory/${id}
")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return [products, setProducts];
};

export default UseAllProducts;

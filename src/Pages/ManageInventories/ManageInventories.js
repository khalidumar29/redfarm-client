import React from "react";
import { Button, Table } from "react-bootstrap";
import UseAllProducts from "../../Hooks/UseAllProducts";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ManageInventories = (id) => {
  const [products, setProducts] = UseAllProducts();
  const navigate = useNavigate();
  const handleDeleteItems = (id) => {
    const confirmDelete = window.confirm("are you confirm to delete?");
    if (confirmDelete) {
      fetch(`https://warehouse-management10.herokuapp.com/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reaminingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(reaminingProducts);
        });
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Product Name</th>
            <th>Supplier Name</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr>
                <td>{products.indexOf(product) + 1}</td>
                <td>{product.name}</td>
                <td>{product.supplierName}</td>
                <td>
                  <Button
                    onClick={() => handleDeleteItems(product._id)}
                    style={{ background: "none" }}
                    className='btn btn-danger'
                  >
                    <AiFillDelete className='text-danger' />
                  </Button>
                  <Button
                    onClick={() => {
                      navigate(`/inventory/${product._id}`);
                    }}
                    style={{ background: "none", marginLeft: "10px" }}
                    className='btn btn-dark'
                  >
                    <AiFillEdit className='text-danger' />
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;

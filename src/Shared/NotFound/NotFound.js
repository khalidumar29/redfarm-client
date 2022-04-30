import React from "react";
import NotFoundImage from "../../images/ErrorImages/404NotFound.jpg";

const NotFound = () => {
  return (
    <div className='container'>
      <div style={{ height: "700px" }} className='w-100 '>
        <img
          style={{ height: "100%" }}
          className='w-100'
          src={NotFoundImage}
          alt='this is page not found'
        />
      </div>
    </div>
  );
};

export default NotFound;

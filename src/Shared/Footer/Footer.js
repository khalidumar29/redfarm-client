import React from "react";
import logo from "../../images/Logo/Red Retro Barn Farm Logo Template (1).png";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#d4d3d3" }}>
      <div className='container'>
        <div className='d-lg-flex justify-content-lg-between align-items-lg-center'>
          <div className=''>
            <img src={logo} alt='' />
          </div>
          <div></div>
        </div>
        <div>
          <p>Copyright &copy; Inventory-Mania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

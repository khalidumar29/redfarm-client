import React from "react";
import logo from "../../images/Logo/Red Retro Barn Farm Logo Template (1).png";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F8F9FA" }}>
      <div className='container-lg py-3'>
        <div className='d-lg-flex justify-content-lg-between align-items-lg-center'>
          <div className=''>
            <img src={logo} alt='' />
          </div>
          <div className='d-flex'>
            <div className='me-lg-5 w-100' style={{ textAlign: "left" }}>
              <h3 className='text-danger'>RED BARN</h3>
              <p>
                red barn is ab warehouse for the farmer.
                <br /> farmer can mange her goods in here
              </p>
              <p>Contact Us: 01XXXXXXXXXXX</p>
              <p>Email: khalid100umar@company.com</p>
            </div>
            <ul className='w-100'>
              <h3 style={{ textAlign: "left" }}>Quick Link</h3>
              <li style={{ textAlign: "left" }} className='list-unstyled'>
                Events
              </li>
              <li style={{ textAlign: "left" }} className='list-unstyled'>
                Contact
              </li>
              <li style={{ textAlign: "left" }} className='list-unstyled'>
                Mentors
              </li>
              <li style={{ textAlign: "left" }} className='list-unstyled'>
                Write Of Us
              </li>
              <li style={{ textAlign: "left" }} className='list-unstyled'>
                Terms Of Conditons
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-left '>
            Copyright &copy; Inventory-Mania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

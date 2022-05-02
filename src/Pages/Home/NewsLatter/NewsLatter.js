import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const NewsLatter = () => {
  return (
    <div style={{ backgroundColor: "#3D3D3D" }}>
      <div
        style={{ textAlign: "left" }}
        className='container  text-light d-lg-flex justify-content-lg-between py-5'
      >
        <div className='py-3'>
          <h2>Newsletter</h2>
          <p>
            By subscribing to our company newsletter you will always <br /> be
            up-to-date on our latest promotions, deals and vehicle <br />{" "}
            inventory!
          </p>
          <div className='d-flex align-items-center newsletter-input'>
            <input
              style={{ borderRadius: "5px" }}
              className='p-1'
              type='text'
              placeholder='email address'
            />
            <input className='ms-2 btn btn-dark ' type='submit' />
          </div>
        </div>
        <div className='py-3'>
          <h2>Latest Tweets</h2>
          <div className='d-flex py-2'>
            <AiOutlineTwitter
              style={{
                width: "20px",
                height: "22px",
                color: "#fff",
                marginRight: "10px",
                marginTop: "5px",
              }}
            />
            <p>
              Put your tweet message here. Make it compelling to <br /> attract
              other @people to read and click on your <br /> mystore.com.
              #redfarm
            </p>
          </div>
          <div className='d-flex py-2'>
            <AiOutlineTwitter
              style={{
                width: "20px",
                height: "22px",
                color: "#fff",
                marginRight: "10px",
                marginTop: "5px",
              }}
            />
            <p>
              Put your tweet message here. Make it compelling to <br /> attract
              other @people to read and click on your <br /> mystore.com.
              #redfarm
            </p>
          </div>
        </div>
        <div className='py-3'>
          <h1>Contact Us</h1>
          <div className='d-flex align-items-center'>
            <GoLocation className='mb-3' />
            <p className='ms-2'>
              Address: 1234 Street Name, City Name, AB 12345
            </p>
          </div>
          <div className='d-flex align-items-center'>
            <BsFillTelephoneFill className='mb-3' />
            <p className='ms-2'>Phone:1-800-123-4567 </p>
          </div>
          <div className='d-flex align-items-center'>
            <HiOutlineMail className='me-3' />
            Email:sales@company.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;

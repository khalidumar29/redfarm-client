import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import banner3 from "../../../images/banner/banner3.png";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='w-100 d-block banner-img'
            src={banner1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Best Spice In The Town</h3>
            <p>We Sell Best Spice In The Holl City. You Can Try !!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 banner-img'
            src={banner2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 style={{ color: "#000" }}>
              We Store Pure Green Vegetables In The City.
            </h3>
            <p style={{ color: "#000" }}>
              We Have Own Farmer TO Collect This Vegetables And Plants It's.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='w-100 d-block banner-img'
            src={banner3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>There Are So Many Way To Modernize Agriculture.</h3>
            <p>
              We Plants The Best Vegetables And Food For You. If You Need
              Somethings Please Come Here{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

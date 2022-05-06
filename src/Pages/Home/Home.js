import React from "react";
import DynamicTitle from "../../Shared/DynamicTitle/DynamicTitle";
import Banner from "./Banner/Banner";
import InventorySection from "./InventorySection/InventorySection";
import NewsLatter from "./NewsLatter/NewsLatter";
import OurTeam from "./OurTeams/OurTeams";

const Home = () => {
  return (
    <div>
      <DynamicTitle key={"1"} title={" | Home"}></DynamicTitle>
      <Banner></Banner>
      <InventorySection></InventorySection>
      <OurTeam></OurTeam>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;

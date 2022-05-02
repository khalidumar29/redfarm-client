import React from "react";
import Team from "./Team/Team";
import team1 from "../../../images/team/team1.jpg";
const OurTeam = () => {
  return (
    <div className='container'>
      <h1 style={{ color: "#780709" }} className='py-3'>
        Our Team
      </h1>
      <div className='d-lg-flex py-lg-3 justify-content-lg-between'>
        <Team pic={team1}></Team>
        <Team pic={team1}></Team>
        <Team pic={team1}></Team>
      </div>
    </div>
  );
};

export default OurTeam;

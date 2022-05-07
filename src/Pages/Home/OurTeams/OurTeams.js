import React from "react";
import Team from "./Team/Team";
import team1 from "../../../images/team/team1.jpg";
import team2 from "../../../images/team/images.jpg";
import team3 from "../../../images/team/CEO.jpg";
const OurTeam = () => {
  return (
    <div className='container'>
      <h1 style={{ color: "#780709" }} className='py-3'>
        Our Team
      </h1>
      <div className='d-lg-flex py-lg-3 justify-content-lg-between'>
        <Team
          des={"Oure honarable ceo. who create this company."}
          name={"Mark Docky"}
          pic={team1}
        ></Team>
        <Team
          des={
            "Our honorable markating manager. who made this compnay so profitable"
          }
          name={"Steave Gain"}
          pic={team2}
        ></Team>
        <Team
          des={
            "Our Honor able production enginner. who create this website so better."
          }
          name={"Dan Ferry"}
          pic={team3}
        ></Team>
      </div>
    </div>
  );
};

export default OurTeam;

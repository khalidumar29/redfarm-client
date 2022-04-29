import React from "react";
import { Helmet } from "react-helmet";
const DynamicTitle = ({ title }) => {
  return (
    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default DynamicTitle;

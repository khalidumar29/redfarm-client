import React from "react";

const Blogs = () => {
  return (
    <div className='container py-lg-5'>
      <div className='py-2' style={{ textAlign: "left" }}>
        <h1 style={{ color: "#683b3b", fontWeight: "400" }}>
          Difference between javascript and nodejs.
        </h1>
        <p style={{ fontSize: "17px", padding: "10px" }}>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. <br /> Whereas Node JS is an interpreter or running
          environment for a JavaScript programming <br /> language that holds
          many excesses, it requires libraries that can easily be accessed from
          <br />
          JavaScript programming for better use.
        </p>
      </div>
      <div className='py-2' style={{ textAlign: "left" }}>
        <h1 style={{ color: "#683b3b", fontWeight: "400" }}>
          When should we use nodejs and when should you use mongodb
        </h1>
        <p style={{ fontSize: "17px", padding: "10px" }}>
          NoSQL DBMS manages the database that stores unstructured data in forms
          of collections and documents
        </p>
        <p style={{ fontSize: "17px", padding: "10px" }}>
          MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following
          reasons:
        </p>
        <ul style={{ fontSize: "17px" }}>
          <li>
            NoSQL Database Management Systems are more flexible than RDBMS
          </li>
          <li>
            The expense of maintaining and even setting up a RDBMS is relatively
            high
          </li>
          <li>
            MongoDB is an open source database management system (DBMS) that
            uses a document-oriented database model which supports various forms
            of data
          </li>
          <li>It holds a set of collections and stores data as document</li>
          <li>Can handle variety of data and huge amount of data</li>
        </ul>
      </div>
      <div className='py-2' style={{ textAlign: "left" }}>
        <h1 style={{ color: "#683b3b", fontWeight: "400" }}>
          Differences between sql and nosql databases.
        </h1>
        <p style={{ fontSize: "17px", padding: "10px" }}>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
          <br />
          SQL databases are table-based, while NoSQL databases are document,
          key-value, <br /> graph, or wide-column stores. SQL databases are
          better for multi-row transactions, <br /> while NoSQL is better for
          unstructured data like documents or JSON.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

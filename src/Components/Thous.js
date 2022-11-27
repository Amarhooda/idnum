import React, { useState } from "react";

const Thous = () => {
  const [num ,setNum]=useState(0)
  const inum =()=>{
    setNum(num+1000)
  }
  const dnum =()=>{
    setNum(num-1000)
  }
  return (
    <div className="container d-flex">
      <div className="container">
        <div>
          <button
            type="button" onClick={inum} style={{fontSize:'20em', fontFamily:'Verdana'}}
            className="btn btn-outline-primary btn-lg my-5 fs-1 p-5 fw-bold"
          >
            Increase
          </button>
        </div>
        <div>
          <button
            type="button" onClick={dnum} style={{fontSize:'20em', fontFamily:'Verdana'}}
            className="btn btn-outline-danger btn-lg my-5 fs-1 p-5 fw-bold"
          >
            Decrease
          </button>
        </div>
      </div>
      <div className="my-5"><span className="btn btn-primary my-4 fw-bold" style={{fontSize:'9em', fontFamily:'Verdana'}}>{num}</span></div>
    </div>
  );
};

export default Thous;

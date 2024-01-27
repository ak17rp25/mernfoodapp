import React from "react";
import {useState} from "react";

export default function Card(data) {
  const priceOption = Object.keys(data.options[0]);
  console.log(priceOption);
  return (
    <div>
      <div
        className="card mt-3"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img src={data.imgSrc} className="card-img-top" alt="..."></img>
        <div className="card-body mt-3">
          <h5 className="card-title">{data.foodName}</h5>
          <p className="card-text">{data.category}</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              {
                priceOption.map((item)=>{

                  return(<option key={item} value={item}>
                {item}
              </option>)

                })
              }
            </select>

            <div className="d-inline h-100">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

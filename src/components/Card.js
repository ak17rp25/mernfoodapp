import React from "react";
import download from '../assets/download.jpg'

export default function Card() {
  return (
    <div>
      <div
        className="card mt-4"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img src={download} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Food Item</p>
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
              <option key="half" value="half">
                HALF
              </option>
              <option key="full" value="full">
                FULL
              </option>
            </select>

            <div className="d-inline fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

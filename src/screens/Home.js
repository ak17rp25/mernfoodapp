import React from "react";
import { useState, useEffect, useCallback } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";


export default function Home() {
  const [search, setsearch] = useState('');
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();

    // console.log(response?.[0],response?.[1]);
    setFoodItem(response?.[0]);
    setFoodCategory(response?.[1]);
  };

  //[] empty means first time render
  useEffect(() => {
    loadData();
  }, []);
  
  const onChangeData = (e) =>{
    setsearch(e.target.value);
    console.log(search);
  }

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade h-100"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value = {search}
                  onChange = {onChangeData}
                ></input>
                <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/300×300?pizza"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×300?burger"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×300?momos"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCategory.length
          ? foodCategory.map((data) => {
              return (
                <div key={data._id} className="row mb-3">
                  <div className="fs-3 m-3"></div>
                  {foodItem.length &&
                    foodItem
                      .filter((item) => {
                        return ((item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase()));
                      })
                      .map((filter_Items) => {
                        return (
                          <div
                            key={filter_Items._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodName={filter_Items.name}
                              options={filter_Items.options}
                              imgSrc={filter_Items.img}
                              category={filter_Items.CategoryName}
                            ></Card>
                          </div>
                        );
                      })}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

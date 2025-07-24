// @ts-nocheck
import React from "react";
//images
import BreakfastImg from "../../assets/utils/images/breakfast.jpg";
import LunchImg from "../../assets/utils/images/lunch.jpg";
import DinnerImg from "../../assets/utils/images/dinner.jpg";
import DessertImg from "../../assets/utils/images/dessert.jpg";

import allMenuItems from "../../assets/Data/AllMenuItems";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

const MenuItem = () => {
  const category1 = "breakfast";
  const category2 = "lunch";
  const category3 = "dinner";
  const category4 = "dessert";

  return (
    <>
      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5">Breakfast</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid w-75 mt-4 mt-lg-0"
                src={BreakfastImg}
                alt="breakfastimg"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {allMenuItems.map((menuItem) => {
                if (category1 === menuItem.category)
                  return (
                    <Card key={menuItem.id} className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {menuItem.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {menuItem.description}
                        </CardText>
                        <CardText className="text-center text-success fs-3 fw-bold">
                          {menuItem.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center text-success text-uppercase fs-1 mb-4 mb-lg-5 fw-bold">
            Lunch
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {allMenuItems.map((menuItem) => {
                if (category2 === menuItem.category)
                  return (
                    <Card
                      key={menuItem.id}
                      className="border-0 bg-dark text-light"
                    >
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {menuItem.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {menuItem.description}
                        </CardText>
                        <CardText className="text-center text-success fs-3 fw-bold">
                          {menuItem.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  );
              })}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid w-75 mt-4 mt-lg-0"
                src={LunchImg}
                alt="breakfastimg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5">Dinner</h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid w-75 mt-4 mt-lg-0"
                src={DinnerImg}
                alt="dinnerimg"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {allMenuItems.map((menuItem) => {
                if (category3 === menuItem.category)
                  return (
                    <Card key={menuItem.id} className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {menuItem.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {menuItem.description}
                        </CardText>
                        <CardText className="text-center text-success fs-3 fw-bold">
                          {menuItem.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="dessert bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center text-success text-uppercase fs-1 mb-4 mb-lg-5 fw-bold">
            Dessert
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {allMenuItems.map((menuItem) => {
                if (category4 === menuItem.category)
                  return (
                    <Card
                      key={menuItem.id}
                      className="border-0 bg-dark text-light"
                    >
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {menuItem.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {menuItem.description}
                        </CardText>
                        <CardText className="text-center text-success fs-3 fw-bold">
                          {menuItem.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  );
              })}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid w-75 mt-4 mt-lg-0"
                src={DessertImg}
                alt="breakfastimg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;



/* 2nd option :

import React from "react";
import BreakfastImg from "../../assets/utils/images/breakfast.jpg";
import LunchImg from "../../assets/utils/images/lunch.jpg";
import DinnerImg from "../../assets/utils/images/dinner.jpg";
import DessertImg from "../../assets/utils/images/dessert.jpg";

import allMenuItems from "../../assets/Data/AllMenuItems";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

const categories = [
  {
    key: "breakfast",
    title: "Breakfast",
    img: BreakfastImg,
    dark: false,
  },
  {
    key: "lunch",
    title: "Lunch",
    img: LunchImg,
    dark: true,
  },
  {
    key: "dinner",
    title: "Dinner",
    img: DinnerImg,
    dark: false,
  },
  {
    key: "dessert",
    title: "Dessert",
    img: DessertImg,
    dark: true,
  },
];

const MenuItem = () => {
  return (
    <>
      {categories.map(({ key, title, img, dark }) => {
        const items = allMenuItems.filter((item) => item.category === key);

        return (
          <div
            key={key}
            className={`${key} ${dark ? "bg-dark text-light" : ""} py-5`}
          >
            <div className="container">
              <h2
                className={`text-center ${
                  dark ? "text-success text-uppercase fw-bold" : ""
                } fs-1 mb-4 mb-lg-5`}
              >
                {title}
              </h2>
              <div
                className={`row ${
                  key === "breakfast" || key === "dinner"
                    ? "flex-column-reverse flex-lg-row"
                    : ""
                }`}
              >
                <div className="col-lg-6 d-flex justify-content-center">
                  <img
                    className="img-fluid w-75 mt-4 mt-lg-0"
                    src={img}
                    alt={`${key}Img`}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-around">
                  {items.map((item) => (
                    <Card
                      key={item.id}
                      className={`border-0 ${dark ? "bg-dark text-light" : ""}`}
                    >
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {item.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {item.description}
                        </CardText>
                        <CardText className="text-center text-success fs-3 fw-bold">
                          {item.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuItem;


*/
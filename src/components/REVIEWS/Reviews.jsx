// @ts-nocheck
import React from "react";
import "../REVIEWS/ReviewsStyles.css";

//persons
import person1 from "../../assets/utils/images/person1.jpg";
import person2 from "../../assets/utils/images/person2.jpg";
import person3 from "../../assets/utils/images/person3.jpg";
import person4 from "../../assets/utils/images/person4.jpg";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="review-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime mollitia accusantium dolorem architecto iure
                  aspernatur?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={person1}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow w-25"
              />
              <CardTitle className="text-success">John Mike</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime mollitia accusantium dolorem architecto iure
                  aspernatur?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={person2}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow w-25"
              />
              <CardTitle className="text-success">Maria Cruz</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime mollitia accusantium dolorem architecto iure
                  aspernatur?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={person3}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow w-25"
              />
              <CardTitle className="text-success">Anna Gold</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime mollitia accusantium dolorem architecto iure
                  aspernatur?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={person4}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow w-25"
              />
              <CardTitle className="text-success">Nick Burn</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

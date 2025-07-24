// @ts-nocheck
import React from "react";

//images
import Gallery1 from "../../assets/utils/images/gallery1.jpg";
import Gallery2 from "../../assets/utils/images/gallery2.jpg";
import Gallery3 from "../../assets/utils/images/gallery3.jpg";
import Gallery4 from "../../assets/utils/images/gallery4.jpg";
import Gallery5 from "../../assets/utils/images/gallery5.jpg";
import Gallery6 from "../../assets/utils/images/gallery6.jpg";

const ImageGallery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Image Gallery
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src={Gallery1} alt="galleryImage" className="img-fluid" />
          </div>
          <div className="my-3">
            <img src={Gallery2} alt="galleryImage" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src={Gallery3} alt="galleryImage" className="img-fluid" />
          </div>
          <div className="my-3">
            <img src={Gallery4} alt="galleryImage" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src={Gallery5} alt="galleryImage" className="img-fluid" />
          </div>
          <div className="my-3">
            <img src={Gallery6} alt="galleryImage" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

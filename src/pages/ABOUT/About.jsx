// @ts-nocheck
import React from "react";
import "../ABOUT/AboutStyles.css";
import AboutChef1 from "../../assets/utils/images/about-chef1.jpg";
import AboutChef2 from "../../assets/utils/images/about-chef2.jpg";
import ImageGallery from "../../components/IMAGEGALLARY/ImageGallery";
import Reviews from "../../components/REVIEWS/Reviews";

const About = () => {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          voluptate nisi cumque est molestiae officiis tenetur repellat expedita
          totam maiores porro nobis ea quidem, voluptatibus at fugiat deserunt
          iure velit reiciendis animi assumenda sequi hic! Ipsum esse quos
          dolorem reiciendis at, neque et, culpa amet harum, saepe tenetur sunt
          ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
          rem, quam sed, esse aliquid earum unde ipsa laborum alias magni
          officia repudiandae, aut nobis maiores distinctio voluptatibus vero
          asperiores dolorum ad accusamus nostrum ea porro. Esse nulla sunt
          porro ipsum, accusantium facilis vitae non ipsa repellendus eum fuga
          quas, quae sit architecto necessitatibus maxime quia quis nesciunt
          repellat ullam expedita debitis. Officia quam, ducimus sit pariatur
          delectus ipsum laboriosam, eius molestiae numquam veniam iusto, error
          harum aliquid voluptas! Vel!
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} alt="" className="img-fluid my-4" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} alt="" className="img-fluid my-4" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          molestias labore dicta eius neque accusantium, at sequi repudiandae
          maxime officiis, modi, consequuntur voluptas a eaque enim. Possimus
          soluta dolores, ducimus labore saepe quam ipsa exercitationem veniam
          nobis autem quia quod repellat magnam debitis nihil similique totam
          minima iusto optio repellendus veritatis, unde aliquid quo? Nemo sit
          fugit ratione nulla, magnam dicta perferendis officia veritatis
          adipisci distinctio veniam odio laborum accusantium quod esse omnis?
          Pariatur assumenda incidunt sit beatae quo sunt enim minima iusto quae
          hic perferendis libero, tempore maiores obcaecati!
        </p>
      </div>
      <div className="bg-dark text-light">
        <ImageGallery />
      </div>
      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
};

export default About;

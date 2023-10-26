import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styling/Slider.css";

const NavbarSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-navbar bg-dark my-3 py-3">
      <Slider {...settings}>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Trending
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Palestine
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Recent
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Journals
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Blogs
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Posts
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Celebrity
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Drama
          </a>
        </div>
        <div>
          <a
            className="nav-link text-white"
            href="/"
            style={{
              fontSize: "25px",
              width: "300px",
            }}
          >
            Movies
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default NavbarSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava1} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava3} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Aiden Roberts</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava2} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Isabella Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava2} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Isabella Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava2} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Isabella Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava3} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Aiden Roberts</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          quas harum perspiciatis obcaecati molestias unde facilis nesciunt
          iusto. Mollitia, repudiandae. Cupiditate tempora nisi animi? Ad
          veritatis aliquid laborum quasi?
        </p>
        <div>
          <img src={ava3} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Aiden Roberts</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

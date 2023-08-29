import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Caro className="containerForCarousel">
      <Slider {...settings}>
        <div>
          <div className="eachCard">
            <div className="eachPosition">
              <img
                src="https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <h3>John Doe</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, similique nobis rem atque sed asperiores odio quas
              optio nisi aspernatur dicta recusandae! Repellat molestiae
              explicabo accusamus magnam, nisi nostrum dolores?
            </p>
          </div>
        </div>

        <div>
          <div className="eachCard">
            <div className="eachPosition">
              <img
                src="https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <h3>John Doe</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, similique nobis rem atque sed asperiores odio quas
              optio nisi aspernatur dicta recusandae! Repellat molestiae
              explicabo accusamus magnam, nisi nostrum dolores?
            </p>
          </div>
        </div>

        <div>
          <div className="eachCard">
            <div className="eachPosition">
              <img
                src="https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <h3>John Doe</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, similique nobis rem atque sed asperiores odio quas
              optio nisi aspernatur dicta recusandae! Repellat molestiae
              explicabo accusamus magnam, nisi nostrum dolores?
            </p>
          </div>
        </div>
        <div>
          <div className="eachCard">
            <div className="eachPosition">
              <img
                src="https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <h3>John Doe</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, similique nobis rem atque sed asperiores odio quas
              optio nisi aspernatur dicta recusandae! Repellat molestiae
              explicabo accusamus magnam, nisi nostrum dolores?
            </p>
          </div>
        </div>
      </Slider>
    </Caro>
  );
};

export default Carousel;

let Caro = styled.div`
  margin-top: 100px;
  font-family: var(--Oshodi);
  .eachCard {
    margin-bottom: 20px;
    margin: 5px;

    background-color: hsl(300, 43%, 22%);
    color: white;
    padding: 30px;
    border-radius: 10px;
    .eachPosition {
      display: flex;
      margin-bottom: 20px;
      img {
        margin-right: 10px;

        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

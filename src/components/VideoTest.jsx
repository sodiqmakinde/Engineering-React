import React from "react";
import ABoyAndGirl from "../assets/image/learn.png";

const VideoTest = () => {
  return (
    <section className="testing">
      <div>
        <h3> {6 + 8} </h3>

        <video autoPlay="autoplay" controls={false}>
          <source
            autoPlay="autoplay"
            src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
            type="video/webm"
          />
        </video>

        <h2>Hello World</h2>
        {/* <img src={ABoyAndGirl} alt="" /> */}
        <img
          src="https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          doloremque tempora debitis consectetur similique minus ipsa veniam
          assumenda dicta cumque ad eveniet, placeat aperiam quae officiis
          asperiores dolorem, vero mollitia.
        </p>
      </div>
    </section>
  );
};

export default VideoTest;

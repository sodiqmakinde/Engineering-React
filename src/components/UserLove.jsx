import React from "react";
import styled from "styled-components";

const UserLove = () => {
  return (
    <Users className="containerForCarousel">
      <div className="ff_guy">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>

      <div className="stars">
        <p>
          ⭐️⭐️⭐️⭐️⭐️ <strong>Rated 5 Stars in Reviews</strong>
        </p>
        <p className="the_ff">
          ⭐️⭐️⭐️⭐️⭐️ <strong>Rated 5 Stars in Reviews</strong>
        </p>
        <p className="the_ss">
          ⭐️⭐️⭐️⭐️⭐️ <strong>Rated 5 Stars in Reviews</strong>
        </p>
      </div>
    </Users>
  );
};

export default UserLove;

let Users = styled.div`
  color: hsl(300, 43%, 22%);
  margin-top: 100px;
  font-family: var(--Lekki);
  .stars {
    margin-top: 50px;
    p {
      background-color: hsl(300, 24%, 96%);
      padding: 15px;
      margin: 8px 5px;
      border-radius: 5px;
      display: inline-block;
      strong {
        margin-left: 40px;
      }
    }
    .the_ff {
      margin-left: 30px;
    }
    .the_ss {
      margin-left: 60px;
    }
  }

  .ff_guy {
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    .stars {
      margin: 0;
      width: 47%;
    }
    .ff_guy {
      width: 33%;
    }
  }
`;

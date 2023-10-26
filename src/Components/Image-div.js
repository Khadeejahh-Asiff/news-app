import React from "react";

export default function Imagediv() {
  return (
    <>
      <div
        className="d-flex"
        style={{
          backgroundColor: "lightseagreen",
          height: "350px",
          marginTop: "50px",
        }}
      >
        <div
          className="image-id"
          style={{
            padding: "1rem",
          }}
        >
          <img
            src="https://i.scdn.co/image/ab67706c0000da8405ef275994360a3f20182518"
            alt="Monkey-News"
            style={{
              paddingTop: "25px",
              width: "300px",
              height: "300px",
            }}
          />
        </div>
        <div
          className="content-of-website"
          style={{
            width: "500px",
            height: "400px",
          }}
        >
          <p
            style={{
              position: "absolute",
              fontSize: "24px",
              textAlign: "justify",
              padding: "3.2rem",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            }}
          >
            🐵🌟 Welcome to Monkey News, where curiosity and the latest stories
            swing into action! 🌍🌴 At Monkey News, we're bananas about bringing
            you the hottest scoops, the quirkiest tales, and everything in
            between 📰. 🙊 Our troop of dedicated reporters scours the jungle of
            news to deliver you the freshest, most appealing stories from around
            the globe 🌐🌍. Whether you're a seasoned news hound or a curious
            newcomer, we've got a branch in our digital canopy just for you
            🌳🐒. 📝 Prepare to be entertained, informed, and inspired as we
            serve you the latest scoop on topics from tech to travel, wildlife
            to wellness 🦋🌴🚀.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../Styling/Footer.css";
import DunlopSportLogo from "../dunlop-sport-logo-svgrepo-com.svg";
import StumbleUponBrand from "../stumbleupon-brands-and-logotypes-svgrepo-com.svg";

export default function Footer() {
  return (
    <>
      <div className="main-main-footer">
        <div className="main-footer d-flex">
          <div className="footer-of-the-news text-white">
            <div className="head1">
              <h1 style={{ fontSize: "40px" }}>Sites Links</h1>
            </div>
            <div className="links d-flex">
              <div className="first-links">
                <ul>
                  <li>
                    <a href="/" className="list-link">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Directions
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="Second-links">
                <ul>
                  <li>
                    <a href="/" className="list-link">
                      Promotions
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="Third-links">
                <ul>
                  <li>
                    <a href="/" className="list-link">
                      WinStar Wallpapers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Central Park at Winstar Village
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Responsive Gaming
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      Media
                    </a>
                  </li>
                </ul>
              </div>
              <div className="Third-links">
                <ul>
                  <li>
                    <a href="/" className="list-link">
                      <i class="fa-brands fa-facebook fa-sm"> Facebook</i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      <i class="fa-brands fa-instagram fa-sm"> Instagram</i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      <i class="fa-brands fa-linkedin fa-sm">LinkedIn</i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="list-link">
                      <i class="fa-brands fa-twitter fa-sm">Twitter</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="svg-parts d-flex">
              <div className="logo-one">
                <a href="/" className="svg-link1">
                  <img src={DunlopSportLogo} alt="Logo" />
                </a>
              </div>
              <div className="logo-two">
                <a href="/" className="svg-link2">
                  <img src={StumbleUponBrand} alt="Logo" />
                </a>
              </div>
              <div className="logo-three">
                <a href="/" className="three">
                  <img
                    src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23161109/2_big-2.png"
                    alt="Brand"
                    style={{ width: "150px", height: "150px" }}
                  />
                </a>
              </div>
              <div className="logo-four">
                <a href="/">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxJFtPK9pYtqIuPqvspLIzg7QIzhIAKEbZw&usqp=CAU"
                    alt="Brand"
                    style={{ width: "170px", height: "150px" }}
                  />
                </a>
              </div>
              <div
                className="brand1"
                style={{ paddingLeft: "20px", marginTop: "15px" }}
              >
                <a href="/">
                  <img
                    src="https://i.pinimg.com/736x/fc/c8/71/fcc871acc6b676aba0d9c7b887405deb.jpg"
                    alt="logo1"
                    style={{
                      width: "120px",
                      height: "100px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-2 text-white">
            <div className="heading-again" style={{ marginLeft: "100px" }}>
              <h1 style={{ fontSize: "40px" }}>Don't Miss Out</h1>
            </div>
            <div>
              <p className="para">
                Sign up for the latest Blog news, product samples & Coupons.
              </p>
            </div>
            <div className="form d-flex">
              <div className="e-mail d-grid">
                <div className="label1">
                  <label htmlFor="E-mail">Enter Your E-mail:</label>
                </div>
                <div className="input1">
                  <input type="email" name="E-mail" id="E" required />
                </div>
              </div>
              <div className="passowrd d-grid">
                <div className="label2">
                  <label htmlFor="pass">Enter Your Password:</label>
                </div>
                <div className="input2">
                  <input type="password" name="pass" id="pass" required />
                </div>
              </div>
            </div>
            <div className="sign-up-button">
              <button className="btn1" type="button">
                Sign Up
              </button>
            </div>
            <div className="content-of-footer">
              <p className="para2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nisi adipisci incidunt velit ea assumenda iusto
                blanditiis voluptates fuga nihil animi repudiandae illo, odit
                voluptate, tenetur aperiam aspernatur doloribus veritatis vitae!
                Alias, esse.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="copyright-warning">
            <div>
              <p
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  fontSize: "3rem",
                }}
              >
                © 2021 Copyright: <b>WebSouls.com</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

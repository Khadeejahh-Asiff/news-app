import React from "react";
import "../Styling/Header2.css";

function Header2() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ paddingLeft: "1rem", paddingRight: "5rem" }}
          >
            <b>🐵NewsMonkey🐵</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white "
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    fontSize: "25px",
                    color: "black",
                    width: "210px",
                  }}
                >
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item text-white" href="/">
                      Home Page 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="/">
                      Home Page 2
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="/">
                      Home Page 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="/">
                      Home Page 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-white "
                  href="/"
                  style={{
                    fontSize: "25px",
                    color: "black",
                    width: "210px",
                  }}
                >
                  Beauty
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="/"
                  style={{
                    fontSize: "25px",
                    color: "black",
                    width: "210px",
                  }}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="/"
                  style={{
                    fontSize: "25px",
                    color: "black",
                    width: "210px",
                  }}
                >
                  Template
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="/"
                  style={{
                    fontSize: "25px",
                    color: "black",
                    width: "210px",
                  }}
                >
                  Explore
                </a>
              </li>
            </ul>
          </div>
          <div className="image-brand">
            <img
              src="https://i.scdn.co/image/ab67706c0000da8405ef275994360a3f20182518"
              alt="Monkey-News"
              style={{
                width: "110px",
                height: "75px",
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header2;

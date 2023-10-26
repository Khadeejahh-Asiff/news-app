import React from "react";
import "../Styling/LocalState.css";
import { useState } from "react";
import playIcon from "../play-svgrepo-com.svg";
import pauseIcon from "../pause-circle-svgrepo-com.svg";

export default function LocalStatePart() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="local-news">
        <h1>
          <b>Local & State News</b>
        </h1>
      </div>
      <div className="locals d-flex">
        <div className="local d-grid">
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/fb1af4b/2147483647/strip/true/crop/880x542+0+0/resize/1760x1084!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fba%2F1f%2F627d97494e92bed21377822cd959%2Fdownload-6.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Crime & Courts </b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Trial for Lakeland Times v Minocqua Brewing Company Begins
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Hannah Davis-Reid,
                </a>
                <p className="time">8 hours ago</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  Gregg Walker, owner of the Lakeland Times, is suing Kirk
                  Bangstad and his business, the Minocqua Brewing Company.
                </p>
              </div>
              <div className="btn-play-pause">
                <button className="StreamPill" onClick={togglePlay}>
                  <span className="StreamPill-iconWrapper">
                    {isPlaying ? (
                      <img
                        src={pauseIcon}
                        alt="Pause"
                        className="StreamPill-icon"
                      />
                    ) : (
                      <img
                        src={playIcon}
                        alt="Play"
                        className="StreamPill-icon"
                      />
                    )}
                  </span>
                  <span className="StreamPill-text">
                    <span className="StreamPill-duration">
                      {isPlaying ? "Pause" : "Play"}
                      {"   "}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/88747b6/2147483647/strip/true/crop/3364x1874+0+180/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F4c%2F00%2F2d711b914e14ad0304f8a67b5c0d%2Fsupreme.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Politics & Government</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Wisconsin Republicans look to pass constitutional
                      amendments on voter eligibility, elections grants
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Harm Venhuizen Associated Press/Report for America ,
                </a>
                <p className="time">9 hours ago</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  Republicans who control the Wisconsin Legislature have
                  advanced a series of voter-related constitutional amendments.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/ac1b244/2147483647/strip/true/crop/624x348+0+0/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fe3%2F2b%2Fabaab46a4bbfb492d816dd3ad405%2Fpicture2.png"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Crime & Courts</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Wisconsin officers fatally shoot person on school roof in
                      exchange of gunfire, state police say
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Todd Richmond Associated Press ,
                </a>
                <p className="time">10 hours ago</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  Police officers in suburban Milwaukee have killed a person who
                  fired at them from a middle school roof.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/ace4a38/2147483647/strip/true/crop/1920x1070+0+1/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwxpr%2Ffiles%2F202011%2Froad-867991_1920.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Native American News</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Proposal would name Wisconsin highway to honor Native
                      American WW2 code talkers
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Thomas Schumacher ,
                </a>
                <p className="time">18 hours ago</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  A bill has been introduced that would name a popular highway
                  after Wisconsin’s Native American code talkers
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/021051c/2147483647/strip/true/crop/3000x1671+0+0/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F21%2F16%2F56d66f9f4eb88a53cf044696ed74%2Fap23296698310313.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Business & Economics</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Wisconsin selected as one of 31 technology hubs to help
                      the industry and create jobs
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Associated Press ,
                </a>
                <p className="time">October 23, 2023.</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  The White House says the dozens of U.S. technology hubs
                  President Joe Biden is announcing will help communities across
                  the country become centers of innovation critical to its
                  competitiveness.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/9fb302f/2147483647/strip/true/crop/1551x864+0+13/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F25%2F0b%2F11b0e5344ebc949bc4542134662a%2Fantigo-water-tower.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Health</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Evers administration allocates $402 million to combat
                      PFAS, other water contaminants
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Associated Press ,
                </a>
                <p className="time">October 23, 2023.</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  Gov. Tony Evers is allocating more than $402 million to
                  address polluted drinking water in Wisconsin. Evers' office
                  announced the move Monday.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/c3d8852/2147483647/strip/true/crop/800x446+0+44/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwxpr%2Ffiles%2F202101%2Fpolice_lights.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Crime & Courts</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Forest County Sheriff’s Office takes woman into custody
                      after man dies on roadway in Laona
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <p className="time">October 23, 2023.</p>
              </div>
              <div className="para">
                <p className="part-of-news">
                  A woman was arrested after a man died in the middle of the
                  road in Laona last week.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-local d-flex" id="main-local">
            <div className="img-card">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/3a69107/2147483647/strip/true/crop/6720x3744+0+546/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1e%2F13%2F445342d94570ba5edf1c83ebc9a8%2Fvoting.jpg"
                alt="Card"
                style={{
                  width: "500px",
                  height: "300px",
                  alignItems: "start",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="content-of-news ">
              <div className="heading-of-news">
                <a href="/" className="category-link">
                  <b>Politics & Government</b>
                </a>
                <br />
                <div className="m-head">
                  <a href="/" className="head-link">
                    <b>
                      Michigan voting rights advocates push for lifting
                      language, other barriers
                    </b>
                  </a>
                </div>
              </div>
              <div className="publisher-details d-flex" id="publisher-details">
                <a href="/" className="publisher">
                  Farah Siddiqi ,
                </a>
                <p className="time">October 23, 2023.</p>
              </div>
              <div className="btn-play-pause">
                <button className="StreamPill" onClick={togglePlay}>
                  <span className="StreamPill-iconWrapper">
                    {isPlaying ? (
                      <img
                        src={pauseIcon}
                        alt="Pause"
                        className="StreamPill-icon"
                      />
                    ) : (
                      <img
                        src={playIcon}
                        alt="Play"
                        className="StreamPill-icon"
                      />
                    )}
                  </span>
                  <span className="StreamPill-text">
                    <span className="StreamPill-duration">
                      {isPlaying ? "Pause" : "Play"}
                      {"   "}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="side-local">
          <div>
            <h1>
              <b>Stay Up to Date!</b>
            </h1>
          </div>
          <div className="calendar">
            <div className="naming">
              <h2>
                <b>My Calendar</b>
              </h2>
            </div>
            <div className="month">
              <h2>October</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>
                    <a href="/" className="day">
                      Sun
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Mon
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Tues
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Wed
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Thu
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Fri
                    </a>
                  </th>
                  <th>
                    <a href="/" className="day">
                      Sat
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody style={{ marginTop: "20px" }}>
                <tr>
                  <td></td>
                  <td>
                    <a href="/" className="date">
                      1
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      2
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      3
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      4
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      5
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      6
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/" className="date">
                      7
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      8
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      9
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      10
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      11
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      12
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      13
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/" className="date">
                      14
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      15
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      16
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      17
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      18
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      19
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      20
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/" className="date">
                      21
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      22
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      23
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      24
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      25
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      26
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      27
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/" className="date">
                      28
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      29
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      30
                    </a>
                  </td>
                  <td>
                    <a href="/" className="date">
                      31
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="link">
            <div className="one">
              <a href="/">Rhinelander, WI WEATHER</a>
            </div>
            <hr />
            <div className="two">
              <a href="/">Wausau, WI WEATHER</a>
            </div>
            <hr />
            <div className="three">
              <a href="/">Ironwood, MI WEATHER</a>
            </div>
            <hr />
          </div>
          <div className="advertisement">
            <a href="/">
              <img
                src="https://tpc.googlesyndication.com/simgad/16548076677890056509"
                alt="Add"
                style={{ width: "450px", height: "400px" }}
              />
            </a>
            <hr />
          </div>
          <div className="addtwo">
            <a href="/">
              <img
                src="https://tpc.googlesyndication.com/simgad/9563372502541248138"
                alt="Add2"
                style={{ width: "450px", height: "400px" }}
              />
            </a>
            <hr />
          </div>
          <div className="addthree">
            <a href="/">
              <img
                src="https://tpc.googlesyndication.com/simgad/1179139175203147813"
                alt="Add3"
                style={{ width: "450px", height: "400px" }}
              />
            </a>
            <hr />
          </div>
          <div className="addfour">
            <a href="/">
              <img
                src="https://tpc.googlesyndication.com/simgad/11451158390334738507"
                alt="Add4"
                style={{ width: "450px", height: "400px" }}
              />
            </a>
            <hr />
          </div>
          <div className="addfive">
            <a href="/">
              <img
                src="https://tpc.googlesyndication.com/simgad/16836934788130572837"
                alt="Add5"
                style={{ width: "450px", height: "400px" }}
              />
            </a>
            <hr />
          </div>
          <div className="notification">
            <div className="meeting">
              <b>
                <a href="/">WXPR Board of Directors Meeting</a>
              </b>
              <p>Tuesday, December 5th at 6:00 P.M.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Cards() {
  return (
    <>
      <div className="News d-flex" style={{ backgroundColor: "white" }}>
        <div className="card-part d-grid mx-4 mt-4" style={{ width: "1100px" }}>
          <div className="card" style={{ width: "1100px" }}>
            <img
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2021/12/10/14/19/woman-6860626_640.jpg"
              alt="Card"
            />
            <div
              className="button"
              style={{ alignItems: "flex-start", textAlign: "start" }}
            >
              <h2 style={{ paddingLeft: "1.5rem", paddingTop: "20px" }}>
                <b>Free Palestine! The War of Freedom</b>
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "20px",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                The Israeli-Palestinian conflict, often referred to as the
                Israel-Palestine conflict, has been a long-standing and complex
                struggle marked by a series of wars, tensions, and negotiations.
                "In 1948, the War of Independence ignited in the land that would
                become Israel and Palestine. This conflict marked a critical
                turning point in the Israeli-Palestinian struggle. The conflict
                has persisted for decades, with various attempts at peace and
                resolution, illustrating the challenges and deep-seated issues
                that continue to shape the region to this day.
              </p>
              <div style={{ paddingLeft: "1.5rem", paddingBottom: "1rem" }}>
                <button
                  className="btn btn-outline-success"
                  style={{ fontSize: "25px" }}
                >
                  Read More!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid mt-4">
          <div className="side-carosal">
            <div className="card" style={{ width: "720px" }}>
              <img
                className="card-img-top"
                src="https://assets.teenvogue.com/photos/5ace8bebd80bb23d68830188/16:9/w_2560%2Cc_limit/gigi-hadid-food.jpg"
                alt="Card"
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Gigi Hadid: Breaking News</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    Gigi Hadid is a renowned American fashion model.
                  </p>
                </div>
                <div style={{ paddingLeft: "150px" }}>
                  <a
                    href="/"
                    className="btn btn-outline-success"
                    style={{ fontSize: "20px" }}
                  >
                    Read More!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="side-carosal mt-2">
            <div className="card" style={{ width: "720px" }}>
              <img
                className="card-img-top"
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVViXo61ktgv3Texy1dw7g9TCTXVb3gFyP0975LjpVlLzEOWtP0WkWkyk1b8lpn8prjhM874wqOOaJ_cQL1HGteB7ZK7HV2xgA8d.jpg?r=d04"
                alt="Card"
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>All of Us are Dead: Part 2</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    There are some about the season 2 of this korean drama.
                  </p>
                </div>
                <div style={{ paddingLeft: "150px" }}>
                  <a
                    href="/"
                    className="btn btn-outline-success"
                    style={{ fontSize: "20px" }}
                  >
                    Read More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

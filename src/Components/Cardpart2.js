import React from "react";

export default function Cardpart2() {
  return (
    <div className="d-flex">
      <div className="card-part d-grid mx-4 mt-4" style={{ width: "800px" }}>
        <div className="d-grid mt-4">
          <div className="side-carosal">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="https://ca-times.brightspotcdn.com/dims4/default/838f4f5/2147483647/strip/true/crop/840x560+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F85%2F4f7d420b48a8a0e10c12c7b06042%2Fkim.jpg"
                alt="Card"
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>North Korea: News</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    North Korean annouces war.
                  </p>
                </div>
                <div style={{ paddingLeft: "130px" }}>
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
          <div className="side-carosal mt-4">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="data:image/jpeg;base64,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"
                alt="Card"
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Poverty Rate Increases</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    Poverty levels up in Pakistan.
                  </p>
                </div>
                <div style={{ paddingLeft: "75px" }}>
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
      <div
        className="card-part d-grid mx-4 mt-4"
        style={{ width: "800px", height: "700px" }}
      >
        <div className="d-grid mt-4">
          <div className="side-carosal">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="https://i0.wp.com/theazb.com/wp-content/uploads/2020/05/PK8303.jpg?fit=1000%2C580&quality=100&strip=all&ssl=1"
                alt="Card"
                style={{ height: "390px" }}
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Plane Crash!!</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    Footage of a planre crash has aired.
                  </p>
                </div>
                <div style={{ paddingLeft: "160px" }}>
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
          <div className="side-carosal mt-4">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="https://cdn.images.express.co.uk/img/dynamic/22/590x/Bitcoin-news-Bitcoin-values-have-fluctuated-1384007.jpg?r=1610626944265"
                alt="Card"
                style={{ height: "365px" }}
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Bitcoin Price 📈</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    The shares of bitcoins & digital money 📈.
                  </p>
                </div>
                <div style={{ paddingLeft: "115px" }}>
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
      <div className="card-part d-grid mx-4 mt-4" style={{ width: "800px" }}>
        <div className="d-grid mt-4">
          <div className="side-carosal">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSl4r1uAM7FP9lwdFX-4_u-l72M8FEAt57971QzrD&s"
                alt="Card"
                style={{ height: "390px" }}
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Breaking News</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    The latest news about Turning public to private.
                  </p>
                </div>
                <div style={{ paddingLeft: "80px" }}>
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
          <div className="side-carosal mt-4">
            <div className="card" style={{ width: "585px" }}>
              <img
                className="card-img-top"
                src="https://npr.brightspotcdn.com/dims4/default/aa9e3c9/2147483647/strip/true/crop/1600x900+0+0/resize/1760x990!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwxpr%2Ffiles%2F202006%2F1.jpg"
                alt="Card"
                style={{ height: "365px" }}
              />
              <div
                className="card-body d-flex "
                style={{ alignItems: "flex-start", textAlign: "start" }}
              >
                <div>
                  <h2 className="card-title" style={{ paddingLeft: "5px" }}>
                    <b>Places For Vacations!</b>
                  </h2>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", paddingLeft: "5px" }}
                  >
                    Top 10 destinations for the vacations.
                  </p>
                </div>
                <div style={{ paddingLeft: "100px" }}>
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
    </div>
  );
}

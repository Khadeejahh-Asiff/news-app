import React from "react";
import "../Styling/NPRnews.css";

export default function NPRnews() {
  return (
    <>
      <div className="npr-news d-flex">
        <div className="npr-news-one">
          <img
            src="https://npr.brightspotcdn.com/dims4/default/610745f/2147483647/strip/true/crop/4520x2518+0+436/resize/560x312!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F10%2F24%2Fap23297496949291-b7296f1faf803d91981507c880c917687d2db13d.jpg"
            alt="npr1"
            style={{ height: "200px", width: "350px" }}
          />
          <div className="npr-news-title-one">
            <b>
              <a className="npr-link" href="/">
                House to enter 22nd day without a speaker, but with a new
                nominee for the job
              </a>
            </b>
            <p>6 Hours ago</p>
          </div>
        </div>
        <div className="npr-news-one">
          <img
            src="https://npr.brightspotcdn.com/dims4/default/dbff144/2147483647/strip/true/crop/3261x1817+0+314/resize/560x312!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F10%2F24%2Fap23297685383196-f0703d409316b461062aee343c4f3be4fe307d0d.jpg"
            alt="npr1"
            style={{ height: "200px", width: "350px" }}
          />
          <div className="npr-news-title-one">
            <b>
              <a className="npr-link" href="/">
                Eye of Hurricane Otis makes landfall near Mexico's Acapulco as
                Category 5 storm
              </a>
            </b>
            <p>9 Hours ago</p>
          </div>
        </div>
        <div className="npr-news-one">
          <img
            src="https://npr.brightspotcdn.com/dims4/default/27f3fe1/2147483647/strip/true/crop/3000x1671+0+163/resize/560x312!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F10%2F24%2F20231018-_dsc0654-edit_custom-1c4b4648e7380ac5ce1ce8f664a3b0e5ef555f2b.jpg"
            alt="npr1"
            style={{ height: "200px", width: "350px" }}
          />
          <div className="npr-news-title-one">
            <b>
              <a className="npr-link" href="/">
                Attacked by Hamas at home, Israeli survivors find solace in a
                hotel: Heartbreak 💔
              </a>
            </b>
            <p>13 Hours ago</p>
          </div>
        </div>
        <div className="npr-news-one">
          <img
            src="https://npr.brightspotcdn.com/dims4/default/a064548/2147483647/strip/true/crop/5279x2941+0+14/resize/560x312!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F10%2F24%2Fap19280852266153_wide-c420b5104808adffa287073ba97f9c31007faa6a.jpg"
            alt="npr1"
            style={{ height: "200px", width: "350px" }}
          />
          <div className="npr-news-title-one">
            <b>
              <a className="npr-link" href="/">
                FBI: 'I am not okay' off-duty Alaska pilot said before trying to
                turn off jet engines
              </a>
            </b>
            <p>13 Hours ago</p>
          </div>
        </div>
        <div className="npr-news-one">
          <img
            src="https://npr.brightspotcdn.com/dims4/default/47fd781/2147483647/strip/true/crop/5088x2835+0+283/resize/560x312!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F7b%2Fc0%2F4bc43b834f95b619fe69ad80f857%2Fgr-86828-1-1.jpg"
            alt="npr1"
            style={{ height: "200px", width: "350px" }}
          />
          <div className="npr-news-title-one">
            <b>
              <a className="npr-link" href="/">
                Fast-track Line 5 permitting push met with protest: A new
                Beginning
              </a>
            </b>
            <p>16 Hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

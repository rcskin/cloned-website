import React from "react";
//import photos for movie posters
import Photo1 from "../images/yellowstone_s5_poster_1400x2100_102722.jpg";
import Photo2 from "../images/tew_uk_s1_poster_1400x2100_nb_092822.jpg";
import Photo3 from "../images/star_treksnw_s1_poster_1400x2100_030822.jpg";
import Photo4 from "../images/lbr_s1_uk_poster_1400x2100_nb_071822.jpg";
import Photo5 from "../images/1883_s1_poster_1400x2100_nb_030722_0.jpg";
import Photo6 from "../images/icarly_s2_poster_1400x2100_nb_031722.jpg";

//create function component
function Series() {
  return (
    <div className="Series-img">
      <section className="padded-container">
        <div className="grid">
          <div className="grid-item2">
            <h1>
              DISCOVER NEW
              <br />
              ORIGINALS &
              <br />
              EXCLUSIVE SERIES
            </h1>

            <div className="info-text">
              <p>
                Explore new worlds and meet captivating characters in new
                <br />
                originals & exclusive series you can't see anywhere else.
              </p>
            </div>
          </div>
          <div className="poster-container">
            <img src={Photo1} alt="yellowstone" />
            <img src={Photo2} alt="ex-wife" />
            <img src={Photo3} alt="star trek" />
            <img src={Photo4} alt="la-brea" />
            <img src={Photo5} alt="1883" />
            <img src={Photo6} alt="icarly" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Series;
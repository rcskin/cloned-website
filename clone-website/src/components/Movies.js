import React from "react";
//import photos for movie posters
import Photo7 from "../images/paw_patrol_sa_poster_1400x2100_nb_111521_1.jpg";
import Photo8 from "../images/tgm_uk_sa_poster_1400x2100_nb_110722_0.jpg";
import Photo9 from "../images/scream5_sa_poster_1400x2100_nb_030622.jpg";
import Photo10 from "../images/transformers_sa_poster_1400x2100_nb_051821.jpg";
import Photo11 from "../images/sonic_2_sa_poster_1400x2100_nb_050422_1.jpg";
import Photo12 from "../images/lost_city_sa_poster_1400x2100_nb_050922.jpg";

function Movies() {
  return (
    <div className="Movies-img">
      <section className="padded-container">
        <div className="grid">
          <div className="grid-item3">
            <h1>
              WATCH NEW &
              <br />
              ICONIC
              <br />
              BLOCKBUSTER
              <br />
              MOVIES
            </h1>

            <div className="info-text3">
              <p>
                Make every night a movie night with new & exclusive
                <br />
                premieres plus hundreds of hits and award-winning classics.
              </p>
            </div>
          </div>
          <div className="poster-container2">
            <img src={Photo7} alt="paw-patrol" />
            <img src={Photo8} alt="tgm" />
            <img src={Photo9} alt="scream5" />
            <img src={Photo10} alt="transformers" />
            <img src={Photo11} alt="sonic-2" />
            <img src={Photo12} alt="lost-city" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
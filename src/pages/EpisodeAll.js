import { Link } from "react-router-dom";
import leaning from "../images/leaning.jpg";

import episodeData from "../episodeData";
import { t } from "i18next";

export default function Episodes() {
  return (
    <div className="episode-all">
      <section className="season">
        <h3 className="season-title">Season 1</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season1`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}1</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
            <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 2</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season2`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}2</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
            <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 3</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season3`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}3</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
            <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
            <h4>OPE.10</h4>
            <h4>OPE.11</h4>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 4</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season4`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}4</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
            <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
            <h4>OPE.10</h4>
            <h4>OPE.11</h4>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 5</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season5`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}5</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
            <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
            <h4>OPE.10</h4>
          </div>
        </div>
      </section>

      <section className="season-last">
        <h3 className="season-title">Season 6</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season6`}>
              <img src={leaning} className="episode-image" />
            </Link>
            <h4>{t("season")}6</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="episode-right">
           <h4>OPE.1</h4>
            <h4>OPE.2</h4>
            <h4>OPE.3</h4>
            <h4>OPE.4</h4>
            <h4>OPE.5</h4>
            <h4>OPE.6</h4>
            <h4>OPE.7</h4>
            <h4>OPE.8</h4>
            <h4>OPE.9</h4>
            <h4>OPE.10</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

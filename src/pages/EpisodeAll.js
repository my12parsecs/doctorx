import { Link } from "react-router-dom";

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
              <img src="https://www.tv-asahi.co.jp/doctor-x_01/story/02/img/pic_01.jpg" className="episode-image" />
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
          <Link to={`/episode/season1/1.1`} className="episode-link">OPE.1</Link>
          <Link to={`/episode/season1/1.2`} className="episode-link">OPE.2</Link>
          <Link to={`/episode/season1/1.3`} className="episode-link">OPE.3</Link>
          <Link to={`/episode/season1/1.4`} className="episode-link">OPE.4</Link>
          <Link to={`/episode/season1/1.5`} className="episode-link">OPE.5</Link>
          <Link to={`/episode/season1/1.6`} className="episode-link">OPE.6</Link>
          <Link to={`/episode/season1/1.7`} className="episode-link">OPE.7</Link>
          <Link to={`/episode/season1/1.8`} className="episode-link">OPE.8</Link>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 2</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season2`}>
              <img src="https://www.tv-asahi.co.jp/doctor-x_02/photo/0004/img/photo06.jpg" className="episode-image" />
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
            <Link to={`/episode/season2/2.1`} className="episode-link">OPE.1</Link>
            <Link to={`/episode/season2/2.2`} className="episode-link">OPE.2</Link>
            <Link to={`/episode/season2/2.3`} className="episode-link">OPE.3</Link>
            <Link to={`/episode/season2/2.4`} className="episode-link">OPE.4</Link>
            <Link to={`/episode/season2/2.5`} className="episode-link">OPE.5</Link>
            <Link to={`/episode/season2/2.6`} className="episode-link">OPE.6</Link>
            <Link to={`/episode/season2/2.7`} className="episode-link">OPE.7</Link>
            <Link to={`/episode/season2/2.8`} className="episode-link">OPE.8</Link>
            <Link to={`/episode/season2/2.9`} className="episode-link">OPE.9</Link>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 3</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season3`}>
              <img src="https://www.tv-asahi.co.jp/doctor-x_03/photo/0002/img/photo03.jpg" className="episode-image" />
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
            <Link to={`/episode/season3/3.1`} className="episode-link">OPE.1</Link>
            <Link to={`/episode/season3/3.2`} className="episode-link">OPE.2</Link>
            <Link to={`/episode/season3/3.3`} className="episode-link">OPE.3</Link>
            <Link to={`/episode/season3/3.4`} className="episode-link">OPE.4</Link>
            <Link to={`/episode/season3/3.5`} className="episode-link">OPE.5</Link>
            <Link to={`/episode/season3/3.6`} className="episode-link">OPE.6</Link>
            <Link to={`/episode/season3/3.7`} className="episode-link">OPE.7</Link>
            <Link to={`/episode/season3/3.8`} className="episode-link">OPE.8</Link>
            <Link to={`/episode/season3/3.9`} className="episode-link">OPE.9</Link>
            <Link to={`/episode/season3/3.10`} className="episode-link">OPE.10</Link>
            <Link to={`/episode/season3/3.11`} className="episode-link">OPE.11</Link>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 4</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season4`}>
              <img src="https://www.tv-asahi.co.jp/doctor-x_04/story/0001/img/01.jpg" className="episode-image" />
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
            <Link to={`/episode/season4/4.1`} className="episode-link">OPE.1</Link>
            <Link to={`/episode/season4/4.2`} className="episode-link">OPE.2</Link>
            <Link to={`/episode/season4/4.3`} className="episode-link">OPE.3</Link>
            <Link to={`/episode/season4/4.4`} className="episode-link">OPE.4</Link>
            <Link to={`/episode/season4/4.5`} className="episode-link">OPE.5</Link>
            <Link to={`/episode/season4/4.6`} className="episode-link">OPE.6</Link>
            <Link to={`/episode/season4/4.7`} className="episode-link">OPE.7</Link>
            <Link to={`/episode/season4/4.8`} className="episode-link">OPE.8</Link>
            <Link to={`/episode/season4/4.9`} className="episode-link">OPE.9</Link>
            <Link to={`/episode/season4/4.10`} className="episode-link">OPE.10</Link>
            <Link to={`/episode/season4/4.11`} className="episode-link">OPE.11</Link>
          </div>
        </div>
      </section>

      <section className="season">
        <h3 className="season-title">Season 5</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season5`}>
              <img src="https://www.tv-asahi.co.jp/doctor-x_05/story/0005/img/02.jpg" className="episode-image" />
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
            <Link to={`/episode/season5/5.1`} className="episode-link">OPE.1</Link>
            <Link to={`/episode/season5/5.2`} className="episode-link">OPE.2</Link>
            <Link to={`/episode/season5/5.3`} className="episode-link">OPE.3</Link>
            <Link to={`/episode/season5/5.4`} className="episode-link">OPE.4</Link>
            <Link to={`/episode/season5/5.5`} className="episode-link">OPE.5</Link>
            <Link to={`/episode/season5/5.6`} className="episode-link">OPE.6</Link>
            <Link to={`/episode/season5/5.7`} className="episode-link">OPE.7</Link>
            <Link to={`/episode/season5/5.8`} className="episode-link">OPE.8</Link>
            <Link to={`/episode/season5/5.9`} className="episode-link">OPE.9</Link>
            <Link to={`/episode/season5/5.10`} className="episode-link">OPE.10</Link>
          </div>
        </div>
      </section>

      <section className="season-last">
        <h3 className="season-title">Season 6</h3>
        <div className="episode-split">
          <div className="episode-left">
            <Link to={`/episode/season6`}>
              <img src="https://www.tv-asahi.co.jp/doctor-x_06/story/0003/img/03.jpg" className="episode-image" />
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
            <Link to={`/episode/season6/6.1`} className="episode-link">OPE.1</Link>
            <Link to={`/episode/season6/6.2`} className="episode-link">OPE.2</Link>
            <Link to={`/episode/season6/6.3`} className="episode-link">OPE.3</Link>
            <Link to={`/episode/season6/6.4`} className="episode-link">OPE.4</Link>
            <Link to={`/episode/season6/6.5`} className="episode-link">OPE.5</Link>
            <Link to={`/episode/season6/6.6`} className="episode-link">OPE.6</Link>
            <Link to={`/episode/season6/6.7`} className="episode-link">OPE.7</Link>
            <Link to={`/episode/season6/6.8`} className="episode-link">OPE.8</Link>
            <Link to={`/episode/season6/6.9`} className="episode-link">OPE.9</Link>
            <Link to={`/episode/season6/6.10`} className="episode-link">OPE.10</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

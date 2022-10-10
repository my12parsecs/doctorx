import { Link, useParams } from "react-router-dom";

import episodeData from "../episodeData";
import { Form } from "react-router-dom";

export default function Season() {
  const { season } = useParams();
  const seasonNum = season[6];
  const oneSeason = episodeData[seasonNum - 1];
  return (
    <section>
      <h2 className="s-episode-title">Season{seasonNum}</h2>
      {oneSeason.map((ope) => {
        return (
          <article key={ope.id} className="s-episode">
            <h5 className="s-episode-name">{ope.name}
              <span className="s-episode-subname">　放送時間 {ope.time}分・放送日 {ope.date}</span>
            </h5>
            <div className="s-episode-split">
              <Link to={`/episode/${season}/${ope.id}`}>
                <img src={ope.photo} className="s-episode-photo"></img>
              </Link>
              <p className="s-episode-info">{ope.info}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

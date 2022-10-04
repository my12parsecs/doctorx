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
            <h5 className="s-episode-name">{ope.name}</h5>
            <div className="s-episode-split">
              <img className="s-episode-photo"></img>
              <p className="s-episode-info">{ope.info}</p>
            </div>
            {/* <Link to={`/products/${product.id}`}>more info</Link> */}
          </article>
        );
      })}
    </section>
  );
}

import { Link } from "react-router-dom";
import characterData from "../characterData";

 export default function Character(){
        // const { season } = useParams();
        // const seasonNum = season[6];
        // const oneSeason = episodeData[seasonNum - 1];

        const characterArr = characterData

        return (
          <section className="character-entire">
            {characterArr.map((person) => {
              return (
                <article key={person.id}>
                  <div className="character-container">
                    <Link to={`/character/${person.id}`} className="character-link">
                    <img src={person.photo} className="character-image" />
                      <h3 className="character-name">{person.name}</h3>
                      <h4 className="character-job">{person.jobMain}</h4>
                    </Link>
                  </div>
                  {/* <Link to={`/products/${product.id}`}>more info</Link> */}
                </article>
              );
            })}
          </section>
        );
 }
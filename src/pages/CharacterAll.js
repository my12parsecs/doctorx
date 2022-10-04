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
                    <img className="character-image"></img>
                    <h3 className="character-name">{person.name}</h3>
                    <h4 className="character-job">{person.jobMain}</h4>
                  </div>
                  {/* <Link to={`/products/${product.id}`}>more info</Link> */}
                </article>
              );
            })}
          </section>
        );
 }
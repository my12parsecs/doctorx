import { Link, useParams } from "react-router-dom";

import characterData from "../characterData";
import { Form } from "react-router-dom";

export default function CharacterEach() {
  const { characterId } = useParams();

  const oneCharacter = characterData.find((each) => each.id === characterId);

  return (
    <article>
      <h2 className="character-each-title">{oneCharacter.name}</h2>
      <div className="character-each-split">
        <img className="character-each-photo"></img>
        <div>
          <h3 className="character-each-quote">「{oneCharacter.quote}」</h3>
          <p className="character-each-info">{oneCharacter.info}</p>
        </div>
      </div>
      <div className="character-each-data">
        {/* {Object.keys(oneCharacter)} */}
        <ul className="character-each-list">
            <li>名前　　　{oneCharacter.name}</li>
            <li>{oneCharacter.birthday ? `誕生日　　${oneCharacter.birthday}` : null}</li>
            <li>{oneCharacter.age ? `年齢　　${oneCharacter.age}` : null}</li>
            <li>{oneCharacter.address ? `住所　　　${oneCharacter.address}` : null}</li>
            <li>{oneCharacter.born ? `出身地　　${oneCharacter.born}` : null}</li>
            <li>{oneCharacter.job ? `職業　　　${oneCharacter.job}` : null}</li>
            <li>{oneCharacter.traits ? `${oneCharacter.traits}` : null}</li>
            <li>{oneCharacter.history ? oneCharacter.history : null}</li>
            <li>{oneCharacter.actor ? `キャスト　${oneCharacter.actor}` : null}</li>
        </ul>
      </div>
    </article>
  );
}

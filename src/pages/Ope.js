import { useParams } from "react-router-dom";
import { t } from "i18next";

import episodeData from "../episodeData";

export default function Ope(){
    const { opeId } = useParams();

    const flatter = episodeData.flat()
    const oneOpe = flatter.find((each)=> each.id === opeId)

    const season = opeId[0]


    return(
        <div className="ope-container">
            <h1 className="ope-title">{t("season")}{season}・{oneOpe.name}</h1>
            <h5 className="ope-title-info">{t("airTime")} {oneOpe.time}{t("minutes")}・{t("airDate")} {oneOpe.date}</h5>

            <div className="ope-split">
                <img src={oneOpe.photo} className="ope-photo" />
                <div>
                    <h3 className="ope-quote">「{oneOpe.quote}」</h3>
                    <p className="ope-info">{oneOpe.info}</p>
                </div>
            </div>

            <div className="ope-detail">

                <div className="ope-section">
                    <h2 className="ope-section-title">{t("characters")}</h2>
                    <div className="ope-character">
                        {oneOpe.character.map((each)=>{
                            return(
                                <div className="ope-character-container">
                                    <h3>{each.type}</h3>
                                    <img src={each.photo}></img>
                                    <h4>{each.name}</h4>
                                    <p>{each.info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="ope-section">
                    <h2 className="ope-section-title">{t("story")}</h2>
                    <div className="ope-story">{oneOpe.story}</div>
                </div>
                
            </div>
        </div>
    )
}
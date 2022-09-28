import leaning from "../leaning.jpg"
import mahjong from "../mahjong.jpg"
import lobby from "../lobby.jpg"

export default function SectionBanner(props){
    return(
        <div className="section-banner">
            <img src={lobby} className="section-banner-photo" />
            <h2 className="section-title">{props.section}</h2>
        </div>
    )
}
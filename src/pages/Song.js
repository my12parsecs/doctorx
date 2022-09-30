import SectionBanner from "../components/SectionBanner"
import steak2 from "../images/steak2.jpg"

export default function Song(){
    return(
        <div>
            <SectionBanner bannerImage={steak2} section="Songs" />
            <div className="season">
                <h3>Season 1</h3>
                <h4>第1話</h4>
                <h4>第2話</h4>
                <h4>第3話</h4>
                <h4>第4話</h4>
            </div>
        </div>
    )
}
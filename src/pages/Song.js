import SectionBanner from "../components/SectionBanner"

export default function Song(){
    return(
        <div>
            <SectionBanner section="Songs" />
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
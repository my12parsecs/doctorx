import SectionBanner from "../components/SectionBanner";


export default function Episodes(){
    return(
        <div>
            <SectionBanner section="Episodes" />
            <div className="season">
                <h3>Season 1</h3>
                <h4>第1話</h4>
                <h4>第2話</h4>
                <h4>第3話</h4>
                <h4>第4話</h4>
                <h4>第5話</h4>
            </div>
            <div className="season"></div>
            <div className="season"></div>
            <div className="season"></div>
        </div>
    )
}
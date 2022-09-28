import SectionBanner from "../components/SectionBanner";
import leaning from "../leaning.jpg"

export default function Episodes() {
  return (
    <div>
      <SectionBanner section="Episodes" />
      <div className="season">
        <h3 className="season-title">Season 1</h3>
        <div className="episode-split">
            <div className="episode-left">
            <img src={leaning} className="episode-image"/>
            <h4>シーズン1</h4>
            </div>
          <div className="episode-right">
            <h4>第1話</h4>
            <h4>第2話</h4>
            <h4>第3話</h4>
            <h4>第4話</h4>
            <h4>第5話</h4>
            <h4>第6話</h4>
            <h4>第7話</h4>
            <h4>第8話</h4>
          </div>
        </div>
      </div>

    </div>
  );
}

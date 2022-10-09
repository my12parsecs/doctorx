import { t } from "i18next";
import SectionBanner from "../components/SectionBanner";
import OneAndOnly from "../images/oneandonly.jpg"

export default function songLyrics() {
  return (
    <div className="lyrics">
        <SectionBanner bannerImage={OneAndOnly} section={t("lyrics")}/>
      <h2>東帝大学病院応援歌「唯一無二」</h2>
      <div className="lyrics-list">
      <ol style={{ listStyleType: "cjk-ideographic" }}>
        <li className="lyrics-one">
            {`唯一無二　並ぶ山はなし\n風は後追いしかせぬ　我が道を行け\n東帝　東帝　東帝　東帝\n誇り高き我が母校　唯一無二`}
        </li>
        <li className="lyrics-two">
            {`唯一無二　遮るものなし\n全ては我ら思うまま 我が道を行け\n東帝　東帝　東帝　東帝\n仰ぎ見ゆる我が母校　唯一無二`}
        </li>
      </ol>
      </div>
      <p></p>
    </div>
  );
}

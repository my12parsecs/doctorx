import { t } from "i18next";
import { Link } from "react-router-dom";

import SectionBanner from "../components/SectionBanner";
import steak2 from "../images/steak2.jpg";

export default function Song() {
  return (
    <div>
      <SectionBanner bannerImage={steak2} section="Songs" />
      <div className="song">
        <section className="theme">
          <h2>{t("soundtrack")}</h2>
          <div className="theme-split">
            <ul className="theme-song">
              <li className="theme-list">1. ドクターXのテーマ</li>
              <li className="theme-list">2. 帝都医科大学付属病院</li>
              <li className="theme-list">3. Holiday Worker</li>
              <li className="theme-list">4. 御意</li>
              <li className="theme-list">5. Emergency Call</li>
              <li className="theme-list">6. ICU</li>
              <li className="theme-list">7. 予測不能</li>
              <li className="theme-list">8. 私、失敗しないので</li>
              <li className="theme-list">9. Countdown to Heaven</li>
              <li className="theme-list">10. 序章</li>
              <li className="theme-list">11. マスクメロン</li>
              <li className="theme-list">12. キューバでの出来事</li>
            </ul>
            <ul className="theme-song">
              <li className="theme-list">13. Power Game</li>
              <li className="theme-list">14. X線写真</li>
              <li className="theme-list">15. カンファレンス</li>
              <li className="theme-list">16. Open the Way</li>
              <li className="theme-list">17. 罠</li>
              <li className="theme-list">18. ノクターンop.2 ロ短調</li>
              <li className="theme-list">19. This is Home</li>
              <li className="theme-list">20. パンドラの箱</li>
              <li className="theme-list">21. Out of Time</li>
              <li className="theme-list">22. Morning Glow</li>
              <li className="theme-list">23. 最後の選択</li>
              <li className="theme-list">24. ドクターXの子守唄</li>
            </ul>
          </div>
        </section>
        <section className="outro">
          <h2>{t("outro")}</h2>
          <ul className="outro-song">
            <li className="outro-list">{t("season")}1: Superfly - Force</li>
            <li className="outro-list">{t("season")}2: Superfly - Bi-Li-Li Emotion</li>
            <li className="outro-list">{t("season")}3: Superfly - 愛をからだに吹き込んで</li>
            <li className="outro-list">{t("season")}4: Superfly - 99</li>
            <li className="outro-list">{t("season")}5: Superfly - Force -Orchestra Ver.-</li>
            <li className="outro-list">{t("season")}6: P!nk - So What</li>
          </ul>
        </section>
        <section className="other">
          <h2>{t("otherSongs")}</h2>
          <div className="other-song">
            <div className="other-song-flex">
              <h3>唯一無二</h3>
              <div className="other-song-right">
                <Link to="/lyrics" className="link-lyrics">{(t("lyrics"))}</Link>
                <h3>東帝大学病院応援歌</h3>
              </div>
            </div>
            <p>
              東帝大学校歌Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="other-song">
            <div className="other-song-flex">
              <h3>O sole mio</h3>
              <h3>ナポリ民謡</h3>
            </div>
            <p>
              東帝大学校歌Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

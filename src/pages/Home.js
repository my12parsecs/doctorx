import Bridge from "../images/bridge.jpg";

import i18next, { t } from "i18next";

export default function Home(props) {

  return (
    <main>
      <div className="banner">
        <img
          // src="https://senseki-kikou.net/wp-content/uploads/2021/11/IMGP8677-2048x1356.jpg"
          src={Bridge}
          alt="東京都の小名木川にかかる萬年橋"
          className="banner-photo"
        />
        <h1 className="banner-title">Doctor-X</h1>
        {/* <h1 className="bb">Doctor-X</h1>
        <h1 className="cc">Doctor-X</h1> */}
        <div className="banner-subtitle">
          <h2 className="subtitle">外科医 •大門未知子</h2>
          <span className="fansite">Fansite</span>
        </div>
      </div>
      <div className="home-content-container">
        <p>{t("welcome")}</p>
        <p>当サイトは制作の途中です。今後少しづつ形になっていきますのでお待ちください。</p>
        <h4>今後追加するもの</h4>
        <p>人物、エピソード、トリビア、曲、ロケ地、名シーン、術式、矛盾点などページ追加</p>
        <p>多言語対応</p>
        <p>フォーム設置</p>
        <p>This website is still in the process of being made. The site would be updated daily. Stay tuned!</p>
        <p>Currently working on...</p>
        <ul>
          <li>Episodes page</li>
          <li>Songs page</li>
          <li>Intro Voiceover</li>
        </ul>


        <div className="home-content">
          <h3 className="home-content-header">Trivia</h3>
          <p className="home-content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="home-content"></div>
        <div className="home-content"></div>
        <div className="home-content"></div>
        <div className="home-content">
            <h3>Episodes</h3>
        </div>
        <div className="home-content">
            <h3>Characters</h3>
        </div>
      </div>
    </main>
  );
}

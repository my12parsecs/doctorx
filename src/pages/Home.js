import Bridge from "../Banner-photo.jpg";

export default function Home() {
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
        <div className="home-content">
          <h3>Trivia</h3>
          <p>
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

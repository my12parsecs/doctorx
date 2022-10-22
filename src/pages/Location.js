export default function Location(){

    // これからやること => episodeやcharacterのようにlocationDataからmapする

    return(
        <div className="location">
            <article className="location-article">
                <div className="location-title">
                    <h3 className="location-season">シーズン1~5</h3>
                    <h2 className="location-name">神原名医紹介所</h2>
                </div>
                <div className="location-info">
                    <img className="location-image"></img>
                    <div className="location-detail">
                        <h4 className="location-detail1">コスガ</h4>
                        <h4 className="location-detail2">日本東京都江東区佐賀1丁目</h4>
                        <p className="location-detail3">ほにゃらら</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
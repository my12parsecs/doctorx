import locationData from "../locationData"

export default function Location(){

    // これからやること => episodeやcharacterのようにlocationDataからmapする

    return(
        <div className="location">
            {locationData.map((item)=>{
                return(
                    <article className="location-article">
                        <div className="location-title">
                            <h3 className="location-season">{item.season}</h3>
                            <h2 className="location-name">{item.scene}</h2>
                        </div>
                        <div className="location-info">
                            <img src={item.image} className="location-image" />
                            <div className="location-detail">
                                <h4 className="location-detail1">{item.location}</h4>
                                <h4 className="location-detail2">{item.address}</h4>
                                <p className="location-detail3">{item.explanation}</p>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
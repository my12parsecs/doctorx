
export default function SectionBanner(props){
    return(
        <div className="section-banner">
            <img src={props.bannerImage} className="section-banner-photo" />
            <h2 className="section-title">{props.section}</h2>
        </div>
    )
}
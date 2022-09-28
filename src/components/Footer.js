import { t } from "i18next"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="footer">
            {/* <img></img> */}
            <h3 className="hospital">東帝大学病院</h3>
            <div className="footer-split">
                <div className="footer-left">
                    <div className="footer-about">
                        <h3>{t("aboutSite")}</h3>
                        <p>{t("aboutSiteExplanation")}</p>
                        <a href="https://www.tv-asahi.co.jp/doctor-x/">{t("officialSite")}</a>
                    </div>
                    <a href="" className="footer-twitter">@DoctorXFan</a>
                </div>
                <div className="footer-page">
                    <Link>エピソード</Link>
                    <h3>hello</h3>
                </div>
            </div>
            <div className="footer-bottom">
                <li>{t("aboutSite")}</li>
                <li>{t("sitemap")}</li>
                <li>{t("contact")}</li>
            </div>
        </footer>
    )
}
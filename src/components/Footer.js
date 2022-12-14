import { t } from "i18next";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      {/* <img></img> */}
      <h3 className="hospital">東帝大学病院</h3>
      <div className="footer-split">
        <div className="footer-left">
          <div className="footer-about">
            <h3>{t("aboutSite")}</h3>
            <p>{t("aboutSiteExplanation")}</p>
            <a
              href="https://www.tv-asahi.co.jp/doctor-x/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("officialSite")}
            </a>
          </div>
          <div className="footer-icon">
          <a
            href="https://twitter.com/DoctorXFansite"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-twitter"
          ><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
          <a
            href="https://github.com/my12parsecs/doctorx"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-twitter"
          ><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          </div>
        </div>
        <div className="footer-page">
          <Link to="/voiceover" className="footer-page-link">{t("voiceOver")}</Link>
          <Link to="/episode" className="footer-page-link">{t("episodes")}</Link>
          <Link to="/character" className="footer-page-link">{t("characters")}</Link>
          <Link to="/song" className="footer-page-link">{t("songs")}</Link>
          <Link to="/lyrics" className="footer-page-link">{t("lyrics")}</Link>
          <Link to="/location" className="footer-page-link">{t("location")}</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/about">{t("aboutSite")}</Link>
        <a>{t("sitemap")}</a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScoU6_8uAFqiih3tZiwMoU1TvXo3LVn2PDy4qFqglZDzISNrg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("contact")}
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </footer>
  );
}

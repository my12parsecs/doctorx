import { logDOM } from "@testing-library/react";
import { t } from "i18next";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return "logo";
            // return isActive ? "active logo" : "logo";
          }}
        >
          <span className="logo-title">Doctor-<span className="X">X</span></span>
          <div className="logo-subtitle">Fansite Beta</div>
        </NavLink>
        <button onClick={props.handleClick} className="lang-button">
          {props.lang === "en" ? "English" : "日本語"}
        </button>
      </div>
      <div className="navbar-right">
        {/* below is the toggle */}
        {/* <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label> */}
        <NavLink
          to="/episode"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          {t("episodes")}
        </NavLink>
        <NavLink
          to="/character"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          {t("characters")}
        </NavLink>
        <NavLink
          to="/song"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          {t("songs")}
        </NavLink>
      </div>
    </nav>
  );
}

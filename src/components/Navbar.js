import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/doctorx/"
        className={({ isActive }) => {
          return isActive ? "active logo" : "logo";
        }}
      >
        <span className="logo-title">Doctor-<span className="X">X</span></span> Fansite
      </NavLink>
      <div className="navbar-right">
        <NavLink
          to="/doctorx/episode"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          エピソード
        </NavLink>
        <NavLink
          to="/doctorx/character"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          登場人物
        </NavLink>
        <NavLink
          to="/doctorx/song"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          曲
        </NavLink>
      </div>
    </nav>
  );
}

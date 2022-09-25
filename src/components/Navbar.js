import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active logo" : "logo";
        }}
      >
        DoctorX Fansite
      </NavLink>
      <div className="navbar-right">
        <NavLink
          to="/episode"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          エピソード
        </NavLink>
        <NavLink
          to="/character"
          className={({ isActive }) => {
            return isActive ? "link active" : "link";
          }}
        >
          登場人物
        </NavLink>
        <NavLink
          to="/song"
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

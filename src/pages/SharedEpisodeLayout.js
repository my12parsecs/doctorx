import { Outlet } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";
import lobby from "../images/lobby.jpg"


export default function SharedEpisodeLayout(){
  return (
    <div>
      <SectionBanner bannerImage={lobby} section="Episodes" />
      <Outlet />
    </div>
  );
};
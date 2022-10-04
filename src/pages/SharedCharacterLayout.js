import { Outlet } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";
import yuinside from "../images/yuinside.jpg"


export default function SharedEpisodeLayout(){
  return (
    <div>
      <SectionBanner bannerImage={yuinside} section="Characters" />
      <Outlet />
    </div>
  );
};
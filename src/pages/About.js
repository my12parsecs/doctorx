import SectionBanner from "../components/SectionBanner";
import lobby from "../images/lobby.jpg"

export default function About(){
    return(
        <div>
            <SectionBanner bannerImage={lobby} section="About" />
            <h1>yo yo yo</h1>
            <p>これは一匹狼の女医の話である。

大学病院の医局は弱体化し、

命のやりと りをする医療もついに弱肉強食の時代に突入した。

 その危機的な医療現場の穴埋めに現れたのが

フリーランス…すなわち、一匹狼のドクターである。 

たとえば、この女。 群れを嫌い、権威を嫌い、束縛を嫌い、

専門医のライセンスと叩き上げのスキルだけが彼女の武器だ。

 外科医、大門未知子。またの名を、ドクター X。</p>
        </div>
    )
}
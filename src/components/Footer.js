import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="footer">
            {/* <img></img> */}
            <h3 className="hospital">東帝大学病院</h3>
            <div className="footer-split">
                <div className="footer-left">
                    <div className="footer-about">
                        <h3>このサイトについて</h3>
                        <p>当サイトは、ドラマ「ドクターX」のファン個人による非公式ファンサイトです。</p>
                        <a href="https://www.tv-asahi.co.jp/doctor-x/">公式サイト</a>
                    </div>
                    <a href="" className="footer-twitter">@DoctorXFan</a>
                </div>
                <div className="footer-page">
                    <Link>エピソード</Link>
                    <h3>hello</h3>
                </div>
            </div>
            <div className="footer-bottom">
                <li>このサイトについて</li>
                <li>サイトマップ</li>
                <li>お問い合わせ</li>
            </div>
        </footer>
    )
}
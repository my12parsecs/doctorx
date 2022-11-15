import i18next, { t } from "i18next";

const characterData = [
    {
        id: "1",
        name: "大門未知子",
        actor: "米倉涼子",
        season: "all",
        jobMain: "フリーランス外科医",
        job: [
            "フリーランス外科医"
        ],
        quote: "バイトじゃなくてフリーランス",
        info: "",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast01.jpg",
        birthday: "1976年1月7日",
        age: "",
        address: [
            "東京都目黒区青岡山7-5-8",
            "東京都目黒区旗の川6-4-4"
        ],
        born: "広島県　呉市",
        license: "2001年4月",
        licenseNumber: "0982586",
        history: [],
        traits: [
            "特技：手術",
            "趣味：手術"
        ]
    },
    {
        id: "2",
        name: "神原晶",
        actor: "岸部一徳",
        season: "all",
        jobMain: "神原名医紹介所・所長",
        job: "神原名医紹介所・所長",
        quote: "メロンです、請求書です",
        info: "ほにゃらら",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast10.jpg",
    },
    {
        id: "3",
        name: "城之内博美",
        actor: "内田有紀",
        season: "all",
        jobMain: "フリーランス麻酔科医",
        job: [
            "帝都医科大学付属第三病院・麻酔科医",
            "フリーランス麻酔科医"
        ],
        quote: "",
        info: "ほにゃらら",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast03.jpg",
        birthday: "",
        age: "",
    },
    {
        id: "4",
        name: "蛭間重勝",
        actor: "西田敏行",
        season: "all",
        jobMain: "東帝大学病院長",
        job: [
            "帝都医科大学付属病院・外科統括部長",
            "西京大学病院・病院長",
            "東帝大学病院・病院長"
        ],
        quote: "グーテンモルゲン",
        info: "(本名：十一郎)",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast13.jpg",
        birthday: "1951年11月11日",
        age: "",
        address: "東京都世田谷区成城11-4-5",
        born: "富山県"
    },
    {
        id: "5",
        name: "海老名敬",
        actor: "遠藤憲一",
        season: "all",
        jobMain: "御意",
        job: [
           "帝都医科大学付属病院・第二外科・外科教授",
           "国立高度医療センター・戦略統合外科・外科部長",
           "東帝大学病院・外科副部長",
           "東帝大学病院・北海道摩周湖第三九分院・院長",
           "東帝大学病院・外科医局員"
        ],
        quote: "御意",
        info: "ほにゃらら",
        photo: "https://www.tv-asahi.co.jp/doctor-x_06/cast/img/cast04.jpg",
        birthday: "",
        age: "",
    },
    {
        id: "6",
        name: "加地秀樹",
        actor: "勝村政信",
        season: "all",
        jobMain: "腹腔鏡の魔術師",
        job: [
            "帝都医科大学付属第三病院・第二外科・講師",
            "国立高度医療センター・戦略統合外科・外科副部長",
            "東帝大学病院・外科・准教授",
            "東帝大学病院・次世代超低侵襲外科治療担当部長"
        ],
        quote: "デーモン",
        info: "ほにゃらら",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast04.jpg",
        birthday: "",
        age: "",
    },
    {
        id: "7",
        name: "原守",
        actor: "鈴木浩介",
        season: "all",
        jobMain: "金ちゃん",
        job: [
            "帝都医科大学付属第三病院・第二外科・助教",
            "国立高度医療センター・戦略統合外科・外科医長",
            "東帝大学病院・外科医"
        ],
        quote: "守、原守",
        info: "ほにゃらら",
        photo: "https://www.tv-asahi.co.jp/doctor-x_04/cast/img/cast14.jpg",
        birthday: "",
        age: "",
    },
]

export default characterData
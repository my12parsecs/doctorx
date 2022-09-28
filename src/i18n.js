import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const translationsJa = {
    welcome: "こんにちは!",
    episodes: "エピソード",
    characters: "登場人物",
    songs: "曲",
    aboutSite: "このサイトについて",
    aboutSiteExplanation: "当サイトは、ドラマ「ドクターX」のファン個人による非公式ファンサイトです。",
    officialSite: "公式サイト",
    sitemap: "サイトマップ",
    contact: "お問い合わせ"

}
const translationsEn = {
    welcome: "Welcome!",
    episodes: "Episodes",
    characters: "Characters",
    songs: "Songs",
    aboutSite: "About This Site",
    aboutSiteExplanation: "This site is",
    officialSite: "Official Site",
    sitemap: "Sitemap",
    contact: "Contact"
}
// en: {
//     translation: {
//       'ようこそ React と react-i18next へ。': 'Welcome to React and react-i18next.',
//       言語を切り替え: 'change language',
//     },
//   },
//   ja: {
//     translation: {
//       'ようこそ React と react-i18next へ。': 'ようこそ React と react-i18next へ。',
//       言語を切り替え: '言語を切り替え',
//     },
//   },


i18n.use(initReactI18next).init({
    resources: {
        ja: {translation: translationsJa},
        en: {translation: translationsEn}
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
  });
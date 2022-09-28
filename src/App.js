import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//change language related
import "./i18n"
import { useTranslation } from 'react-i18next';
import i18next, { t } from "i18next";


import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Episode from "./pages/Episode";
import Character from "./pages/Character";
import Trivia from "./pages/Trivia";
import Song from "./pages/Song";
import Location from "./pages/Location";
import Scene from "./pages/Scene";
import Site from "./pages/Site";


export default function App() {

  const [lang, setLang] = useState("en")
  const {t} = useTranslation()
  function langy(){
    console.log(lang);
    i18next.changeLanguage(lang)
    setLang((prev)=>{
          return prev === "ja" ? "en" : "ja"
    })
    console.log(lang);
  }

  return (
      <Routes>
        <Route path="/" element={<SharedLayout handleClick={langy} lang={lang}/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/character" element={<Character />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/song" element={<Song />} />
          <Route path="/location" element={<Location />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/site" element={<Site />} />
        </Route>
      </Routes>
  );
}

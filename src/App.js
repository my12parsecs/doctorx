import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctorx" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="episode" element={<Episode />} />
          <Route path="character" element={<Character />} />
          <Route path="trivia" element={<Trivia />} />
          <Route path="song" element={<Song />} />
          <Route path="location" element={<Location />} />
          <Route path="scene" element={<Scene />} />
          <Route path="site" element={<Site />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

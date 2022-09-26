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
      <Routes>
        <Route path="/doctorx/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/doctorx/about" element={<About />} />
          <Route path="/doctorx/episode" element={<Episode />} />
          <Route path="/doctorx/character" element={<Character />} />
          <Route path="/doctorx/trivia" element={<Trivia />} />
          <Route path="/doctorx/song" element={<Song />} />
          <Route path="/doctorx/location" element={<Location />} />
          <Route path="/doctorx/scene" element={<Scene />} />
          <Route path="/doctorx/site" element={<Site />} />
        </Route>
      </Routes>
  );
}

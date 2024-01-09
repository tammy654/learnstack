import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import CoursesSection from "..Components/CoursesSection";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<CoursesSection />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

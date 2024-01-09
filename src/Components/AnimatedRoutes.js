import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../Pages/Home";
import Courses from './CoursesSection';



import {AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />;
            <Route path="/courses" element={<Courses />} />;
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
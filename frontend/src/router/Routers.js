import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Tours from "../pages/tours/Tours";
import TourDetails from "../pages/tourDetails/TourDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import SearchResultList from "../pages/searchResultList/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/toursearch" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;

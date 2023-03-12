import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import CharactersPage from "../pages/charactersPage/CharactersPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Layout from "../layout/Layout";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/characters'} element={<CharactersPage />}/>
        </Route>
        <Route path={'*'} element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default RouteComponent;

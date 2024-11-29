import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../pages/CamperPage/CamperPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

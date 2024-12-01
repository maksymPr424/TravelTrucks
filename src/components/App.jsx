import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Loader from "./Loader/Loader";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../pages/CamperPage/CamperPage"));
const Features = lazy(() => import("./Features/Features"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

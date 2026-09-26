import { DashboardPage } from "./app/pages/DashboardPage";
import { CountryDetailPage } from "./app/pages/CountryDetailPage";
import { NotFound } from "./app/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/country/:id" element={<CountryDetailPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

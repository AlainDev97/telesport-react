import { DashboardPage } from "./app/pages/DashboardPage";
import { CountryDetailPage } from "./app/pages/CountryDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/country/:id" element={<CountryDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

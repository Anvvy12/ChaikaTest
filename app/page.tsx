"use client";
import InfoPage from "./features/info-page/InfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

const Page: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ChaikaTest" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};
export default Page;

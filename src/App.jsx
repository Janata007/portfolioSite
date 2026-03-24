import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Works from "./pages/Works";
import ComicPage from "./pages/ComicPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/comic" element={<ComicPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
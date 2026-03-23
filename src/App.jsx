import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Works from "./pages/Works";
import ProjectPage from "./pages/projectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
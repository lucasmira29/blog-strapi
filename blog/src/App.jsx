import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/blog/:documentId" element={<BlogPage />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

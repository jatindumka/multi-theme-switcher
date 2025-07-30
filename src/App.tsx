import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import Home from "./pages/Home";
// @ts-ignore
import About from "./pages/About";
// @ts-ignore
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

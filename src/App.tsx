import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

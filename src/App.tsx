import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

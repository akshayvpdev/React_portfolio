import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import OutletConnection from "./Routes/OutletConnection";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<OutletConnection />} >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Missing from "./pages/Missing";
import Favorite from "./pages/Favorite";
import Gym from "./pages/Gym";
import Trouble from "./pages/Trouble";
import Menace from "./pages/Menaces";
import Nav from "./components/Nav";

export default function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/favorite" element={<Favorite />} />
        <Route exact path="/gym" element={<Gym />} />
        <Route exact path="/missing" element={<Missing />} />
        <Route exact path="/trouble" element={<Trouble />} />
        <Route exact path="/menace" element={<Menace />} />
      </Routes>
    </div>
  );
}

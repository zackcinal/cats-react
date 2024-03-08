import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home";
import Cats from "./screens/Cats";
import CatEdit from "./screens/CatEdit";
import CatDetail from "./screens/CatDetail";
import CatCreate from "./screens/CatCreate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cats/:id" element={<CatDetail />} />
        <Route path="/add-cat" element={<CatCreate />} />
        <Route path="/cats/:id/edit" element={<CatEdit />} />
      </Routes>
    </div>
  );
}

export default App;

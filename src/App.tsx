import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Navbar, UseAnimateHook } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/use-animate" element={<UseAnimateHook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

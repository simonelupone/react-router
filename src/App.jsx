import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Products} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

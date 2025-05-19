import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/products">
            <Route index Component={Products} />
            <Route path="/products/:id" Component={SingleProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

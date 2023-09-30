import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/common/NavbarMenu";
import AddProducts from "./components/Products/AddProducts";
import ShowProducts from "./components/Products/ShowProducts";
import ProductDetail from "./components/Products/ProductDetail";
import UpdateProducts from "./components/Products/UpdateProducts";
import Home from "./components/common/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="left">
          <NavbarMenu />
        </div>
        <div className="right">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/showproducts" Component={ShowProducts} />
            <Route exact path="/addProduct" Component={AddProducts} />
            <Route exact path="/:id/" Component={ProductDetail} />
            <Route exact path="/:id/update" Component={UpdateProducts} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

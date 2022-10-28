import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Contacto } from "./components/NavBar/NavBar.jsx";
import { CartContainer } from "./components/CartContainer/CartContainer.jsx";
import { CustomProvider } from "./components/context/CartContext.jsx";

export function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/inicio" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaID" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;

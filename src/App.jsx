import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbars from "./components/Navbars";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            duration: 5000,
          },
        }}
      />

      <div className="bg-dark text-white min-vh-100">
        <BrowserRouter>
          <CartProvider>
            <Navbars />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    titulo="Bienvenido a ViluCap"
                    descripcion="Página Principal"
                  />
                }
              />
              <Route
                path="/categories/:category"
                element={<ItemListContainer titulo="Categoria" />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkuot" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

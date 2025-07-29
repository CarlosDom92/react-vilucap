import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbars from "./components/Navbars";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbars  />
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
        <Route path="/categories/:category" element={<ItemListContainer titulo="Categoria"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

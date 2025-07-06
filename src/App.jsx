import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbars from "./components/Navbars";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbars />
      <ItemListContainer
        titulo="Bienvenido a ViluCap"
        descripcion="Página Principal"
      />
    </>
  );
}

export default App;

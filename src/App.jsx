import ListaProductos from "./components/ListaProductos";
import Formulario from "./components/Formulario";
import Registro from "./components/Registro";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="main-container my-5">

      <h1 className="text-center mb-5">
        🛒 Tienda React
      </h1>

      {/* Productos */}
      <div className="card-dark mb-4">
        <h2 className="section-title">Productos disponibles</h2>
        <ListaProductos />
      </div>

      {/* Formulario de contacto */}
      <div className="card-dark mb-4">
        <h2 className="section-title">Formulario de contacto</h2>
        <Formulario />
      </div>

      {/* Registro */}
      <div className="card-dark mb-4">
        <h2 className="section-title">Registro</h2>
        <Registro />
      </div>

      {/* Login */}
      <div className="card-dark mb-4">
        <h2 className="section-title">Iniciar Sesión</h2>
        <Login />
      </div>

    </div>
  );
}

export default App;

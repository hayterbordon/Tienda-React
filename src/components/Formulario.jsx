import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
    };

    this.validator = new SimpleReactValidator();

    this.cambiar = this.cambiar.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  cambiar(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async enviar(e) {
    e.preventDefault();

    if (this.validator.allValid()) {
      try {
        // Guardar datos en Firestore
        await addDoc(collection(db, "contactos"), {
          nombre: this.state.nombre,
          email: this.state.email,
          fecha: new Date()
        });

        alert("Datos guardados correctamente en Firestore!");

        // Limpiar formulario
        this.setState({ nombre: "", email: "" });
        this.validator.hideMessages();
      } catch (error) {
        console.error("Error al guardar en Firestore:", error);
        alert("Hubo un error al guardar los datos.");
      }

    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Formulario de contacto</h2>
        <form onSubmit={this.enviar}>

          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.cambiar}
            />
            <div className="text-danger">
              {this.validator.message("nombre", this.state.nombre, "required|alpha_space")}
            </div>
          </div>

          <div className="mb-3">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.cambiar}
            />
            <div className="text-danger">
              {this.validator.message("email", this.state.email, "required|email")}
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Formulario;

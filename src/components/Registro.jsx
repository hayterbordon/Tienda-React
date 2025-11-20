import React, { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

class Registro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.cambiar = this.cambiar.bind(this);
    this.registrar = this.registrar.bind(this);
  }

  cambiar(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async registrar(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      );

      alert("Usuario registrado correctamente!");

      this.setState({ email: "", password: "" });

    } catch (error) {
      console.error(error);
      alert("Error al registrar: " + error.message);
    }
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Registro</h2>
        <form onSubmit={this.registrar}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.cambiar}
            />
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.cambiar}
            />
          </div>

          <button className="btn btn-success" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    );
  }
}

export default Registro;

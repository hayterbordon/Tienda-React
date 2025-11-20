import React, { Component } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      usuario: null
    };

    this.cambiar = this.cambiar.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  cambiar(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async login(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      );

      this.setState({ usuario: userCredential.user });
      alert("Inicio de sesión correcto!");

    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión: " + error.message);
    }
  }

  async logout() {
    await signOut(auth);
    this.setState({ usuario: null });
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Iniciar Sesión</h2>

        {this.state.usuario ? (
          <div>
            <p>Usuario logueado: {this.state.usuario.email}</p>
            <button className="btn btn-danger" onClick={this.logout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <form onSubmit={this.login}>
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

            <button className="btn btn-primary" type="submit">
              Iniciar Sesión
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;

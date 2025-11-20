import React, { Component } from "react";
import Producto from "./Producto";
import { Container, Row, Col } from "react-bootstrap";

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: "Polera", precio: 10000 },
        { id: 2, nombre: "Pantalón", precio: 20000 },
        { id: 3, nombre: "Zapatillas", precio: 35000 },
      ],
      carrito: []
    };
  }

  agregarAlCarrito = (producto) => {
    this.setState({
      carrito: [...this.state.carrito, producto]
    });
  };

  totalCarrito = () => {
    return this.state.carrito.reduce((acc, p) => acc + p.precio, 0);
  };

  render() {
    return (
      <Container>

        {/* Productos */}
        <Row>
          {this.state.productos.map((prod) => (
            <Col key={prod.id} sm={12} md={6} lg={4}>
              <Producto datos={prod} onAgregar={this.agregarAlCarrito} />
            </Col>
          ))}
        </Row>

        {/* Carrito */}
        <div className="carrito-box mt-4">
          <h4 className="carrito-title">
            🛒 Carrito ({this.state.carrito.length} productos)
          </h4>

          {/* Estado del carrito */}
          {this.state.carrito.length === 0 ? (
            <p className="carrito-vacio">🔴 Tu carrito está vacío.</p>
          ) : (
            <p className="carrito-ok">🟢 Producto agregado correctamente</p>
          )}

          {/* Lista de productos */}
          {this.state.carrito.length > 0 && (
            <ul className="carrito-lista">
              {this.state.carrito.map((item, index) => (
                <li key={index} className="carrito-item">
                  {item.nombre} — ${item.precio.toLocaleString()}
                </li>
              ))}
            </ul>
          )}

          {/* Total */}
          <h5 className="carrito-total">
            Total: <span>${this.totalCarrito().toLocaleString()}</span>
          </h5>
        </div>
      </Container>
    );
  }
}

export default ListaProductos;

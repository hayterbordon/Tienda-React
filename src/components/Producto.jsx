import { Card, Button } from "react-bootstrap";

function Producto({ datos, onAgregar }) {
  
  const agregar = () => {
    onAgregar(datos);
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "15px" }}>
      <Card.Body>
        <Card.Title>{datos.nombre}</Card.Title>
        <Card.Text>Precio: ${datos.precio}</Card.Text>
        <Button variant="primary" onClick={agregar}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;

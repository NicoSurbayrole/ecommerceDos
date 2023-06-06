import "./Item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Items = ({ articulo, description, productId, imgUrl }) => {
  return (
    <section>
      <Card className="cards" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="CardBody">
          <Card.Title>{articulo.toUpperCase()}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className="buttonVerProducto" variant="primary">
            <Link to={`/item/${productId}`}>VER PRODUCTO</Link>
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Items;

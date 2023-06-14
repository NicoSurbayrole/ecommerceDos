import { GetProducts } from "../../utils/GetProducts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const { productos } = GetProducts();

  return (
    <main className="Main">
      {productos.map(({ articulo, description, productId, imgUrl }) => (
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
      ))}
      ;
    </main>
  );
};

export default Products;

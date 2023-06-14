import Items from "../Items/Items";

const ItemList = ({ listaProductos }) => {
  return (
    <main className="Main">
      {listaProductos.slice(0,8).map((producto) => {
        return (
          <Items
            key={producto.productId}
            productId={producto.productId}
            imgUrl={producto.imgUrl}
            stock={producto.stok}
            description={producto.description}
            price={producto.price}
            articulo={producto.articulo}
          />
        );
      })}
    </main>
  );
};

export default ItemList;

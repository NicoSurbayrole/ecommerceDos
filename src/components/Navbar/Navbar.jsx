import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [drop, setDrop] = useState(false);
  const abrirCerrarDropdown = () => setDropDown(!dropdown);
  const abrirCerrarDrop = () => setDrop(!drop);

  return (
    <nav className="navBar">
      <ul className="navUlUno">
        <Link to={"/"}>
          <li>FULLSNIKER</li>
        </Link>
        <Link to={"/products"}>
          <li>PRODUCTOS</li>
        </Link>
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle className="dropBtn">
            <li>CATEGORIAS</li>
          </DropdownToggle>
          <DropdownMenu className="dropMenu">
            <DropdownItem className="dropItem">REMERAS</DropdownItem>
            <DropdownItem className="dropItem">PANTALONES</DropdownItem>
            <DropdownItem className="dropItem">ZAPATILLS</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <li>CONTACTO</li>
      </ul>
      <ul className="navUlDos">
        <li>
          <img
            src="https://cdn.discordapp.com/attachments/743564275783696539/1111089192945066024/icons8-agregar-a-carrito-de-compras-30.png"
            alt="carrito"
          ></img>
        </li>
        <Dropdown isOpen={drop} toggle={abrirCerrarDrop}>
          <DropdownToggle className="dropBtn">
            <li>
              <img
                src="https://cdn.discordapp.com/attachments/743564275783696539/1111087311241887764/icons8-usuario-50.png"
                alt="user imge"
              ></img>
            </li>
          </DropdownToggle>
          <DropdownMenu className="dropMenu">
            <Link to={"/login"}><DropdownItem className="dropItem">INICIAR SESION</DropdownItem></Link>
            <Link to={"/registro"}><DropdownItem className="dropItem">REGISTRARSE</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </nav>
  );
};

export default Navbar;
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="registerMani">
        <section className="fromRegister">
            <h4>REGISTRARSE</h4>
            <input className="controls" type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre"></input>
            <input className="controls" type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido"></input>
            <input className="controls" type="email" name="email" id="email" placeholder="Ingresa tu email"></input>
            <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingresa una contraseña"></input>
            <input className="botons" type="submit" value="REGISTRARSE"></input>
            <p>¿Ya Tengo Cuenta?<Link className="link" to={'/login'}>Click Aqui</Link></p>
        </section>
    </main>
  );
};

export default Register;

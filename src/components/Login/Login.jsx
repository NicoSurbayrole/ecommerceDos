import { Link } from "react-router-dom";

const Login = () =>{
    return(
    <main className="registerMani">
        <section className="fromRegister">
            <h4>INICIAR SESION</h4>
            <input className="controls" type="email" name="email" id="email" placeholder="Ingresa tu email"></input>
            <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingresa una contraseña"></input>
            <input className="botons" type="submit" value="INICIAR SESION"></input>
            <p>¿No Estas Registrado?<Link className="link" to={'/registro'}>Click Aqui</Link></p>
        </section>
    </main>
    )}


export default Login;
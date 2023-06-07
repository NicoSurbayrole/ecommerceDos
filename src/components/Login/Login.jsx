import { Link,useNavigate } from "react-router-dom";
import { GetUsers } from "../../utils/GetUsers";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/user";
import Swal from "sweetalert2";

const Login = () =>{
    const {user} = GetUsers()
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (usuario) =>{
        const userLog = user.find(({email,password}) => email === usuario.email && password === usuario.password)
        
        if(userLog){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "usuario logeado correctamente",
                showConfirmButton: false,
                timer: 1500,
              })
            dispatch(setUser(userLog),navigate("/"))
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "prueba con un usuario valido",
                showConfirmButton: false,
                timer: 1500,
              })
        }

    }


    return(
    <main className="registerMani">
        <section className="fromRegister">
            <h4>INICIAR SESION</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="controls" type="email" name="email" placeholder="Ingresa tu email"{...register("email",{required:true})}/>
                <input className="controls" type="password" name="contraseña" placeholder="Ingresa una contraseña" {...register("password",{required:true})}/>
                <input className="botons" type="submit" value="INICIAR SESION"/>
            </form>
            <p>¿No Estas Registrado?<Link className="link" to={'/registro'}>Click Aqui</Link></p>
        </section>
    </main>
    )}


export default Login;
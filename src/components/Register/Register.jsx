import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


const Register = () => {

    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <main className="registerMani">
      <section className="fromRegister">
        <h4>REGISTRARSE</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="controls"
            {...register("name", {
              required: true,
              pattern: {
                value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/,
              },
            })}
            type="text"
            placeholder="Ingresa tu nombres"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={() => <p className="error">El nombre es requerido</p>}
          />
          <input
            className="controls"
            type="text"
            name="apellido"
            placeholder="Ingresa tu apellido"
            {...register("apellido", {
              required: true,
              pattern: { value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/ },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="apellido"
            render={() => <p>El apellido es requerido</p>}
          />
          <input
            className="controls"
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            {...register("email", {
              required: true,
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={() => <p>Ingresa un email valido</p>}
          />
          <input
            className="controls"
            type="password"
            name="contraseña"
            placeholder="Ingresa una contraseña"
            {...register("password", { required: true, minLength: 8 })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={() => <p>La contraseña debe tener minimo  caracteres</p>}
          />
          <input className="botons" type="submit" value="REGISTRARSE"></input>
          <p>
            ¿Ya Tengo Cuenta?
            <Link className="link" to={"/login"}>
              Click Aqui
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;

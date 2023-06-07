import "./Register.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CreatUser } from "../../utils/CreatUser";
import { GetUsers } from "../../utils/GetUsers";

const Register = () => {
  const navigate = useNavigate();
  const { user } = GetUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (users) => {
    let usuario;

    const userValidat = user.find(({ email }) => email === users.email);

    if (userValidat) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "email ya registrado",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (user.length === 0) {
        usuario = users;
       usuario = {...usuario, role:"admin"} 
        CreatUser(usuario).then(() =>
          Swal.fire({
            position: "center",
            icon: "success",
            title: "usuario creado correctamente",
            showConfirmButton: false,
            timer: 1500,
          })
        );
        navigate("/login");
      } else {
        usuario = users;
        usuario = {...usuario, role:"user"}
        CreatUser(usuario).then(() =>
          Swal.fire({
            position: "center",
            icon: "success",
            title: "usuario creado correctamente",
            showConfirmButton: false,
            timer: 1500,
          })
        );
        navigate("/login");
      }
    }
  };

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
            name="lastName"
            placeholder="Ingresa tu apellido"
            {...register("lastName", {
              required: true,
              pattern: { value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/ },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
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
            render={() => <p>La contraseña debe tener minimo caracteres</p>}
          />
          <input className="botons" type="submit" value="REGISTRARSE" />
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

import { useForm } from "react-hook-form";
import { emailValidator } from "../Validators/emailValidator";
import { passwordValidator } from "../Validators/passwordValidator";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmitted = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitted)}>
        <input
          {...register("email", emailValidator)}
          type="text"
          placeholder="unesite email"
        ></input>
        <input
          {...register("password", passwordValidator)}
          type="password"
          placeholder="unesite vasu lozinku"
        ></input>
        {errors.password && <p>{errors.password.message}</p>}
        {errors.email && <p>{errors.email.message}</p>}
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;

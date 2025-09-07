import { useForm } from "react-hook-form";

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
        <input type="text" placeholder="unesite vase ime"></input>
        <input
          {...register("password", {
            required: true,
            validate: {
              trimCheck: (value) => value.trim() !== "",
            },
          })}
          type="password"
          placeholder="unesite vasu lozinku"
        ></input>
        {errors.password && <p>This field is required</p>}
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;

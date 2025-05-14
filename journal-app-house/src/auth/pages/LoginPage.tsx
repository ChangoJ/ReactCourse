import { AuthForm } from "../components/AuthForm/AuthForm";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      typeForm="Login"
      title=" Iniciar sesión para empezar"
    >
      <AuthForm typeForm="Login" />
    </AuthLayout>

   
  );
};

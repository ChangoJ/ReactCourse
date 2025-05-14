import { AuthForm } from "../components/AuthForm/AuthForm";

import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout typeForm="Register" title=" Crea una cuenta para empezar">
      <AuthForm typeForm="Register" />
    </AuthLayout>
  );
};

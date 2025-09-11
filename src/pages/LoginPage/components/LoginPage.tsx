import { LoginForm } from "@/modules/AuthForm";

export const LoginPage = () => {
  return (
    <div className="pt-[8%]">
      <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Login
      </h3>
      <LoginForm />
    </div>
  );
};

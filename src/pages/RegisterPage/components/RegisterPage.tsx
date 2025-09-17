import { RegisterForm } from "@/modules/AuthForm";

export const RegisterPage = () => {
  return (
    <div className="pt-[8%]">
      <h3 className=" text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Register
      </h3>
      <RegisterForm />
    </div>
  );
};

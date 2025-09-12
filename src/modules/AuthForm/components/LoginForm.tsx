import { useLoginSchema } from "@/modules/AuthForm/helpers/useLoginSchema";
import { useLoginMutation } from "@/services/loginApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Separator } from "@/ui/separator";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/modules/AuthForm/authSlice/authSlice";
import loadingSvg from "@/assets/loading.svg";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const onLogin = async (data: { email: string; password: string }) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setAccessToken(result.accessToken));
      toast.success("Login successful!");
      navigate("/");
    } catch (err: any) {
      console.log(err);
    }
  };
  const { register, handleSubmit, errors } = useLoginSchema();

  if (isLoading)
    return (
      <div>
        <img src={loadingSvg} alt="Loading" />
      </div>
    );
  return (
    <form className="mt-[8%]" onSubmit={handleSubmit((data) => onLogin(data))}>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-name">Email</Label>
            <Input
              {...register("email")}
              id="tabs-demo-name"
              placeholder="Enter your email here"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-username">Password</Label>
            <Input
              {...register("password")}
              id="tabs-demo-username"
              type="password"
              placeholder="Enter your password here"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Button type="submit">Log In</Button>
          <Separator className="my-4" />
          <div className="flex items-center gap-4">
            <p>Don't have an account yet?</p>
            <Button variant="outline">
              <Link to="/auth/register">Register</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

import { useRegisterSchema } from "@/modules/AuthForm/helpers/useRegisterSchema";
import { useRegisterMutation } from "@/services/loginApi";
import { Button } from "@/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Separator } from "@/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setAccessToken } from "@/modules/AuthForm/authSlice/authSlice";
import { toast } from "sonner";
import loadingSvg from "@/assets/loading.svg";

export const RegisterForm = () => {
  const [selectedCard, setSelectedCard] = useState("account");
  const [accountData, setAccountData] = useState({ fullName: "", email: "" });
  const { accountForm, passwordForm } = useRegisterSchema();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const onRegister = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      const result = await register(data).unwrap();
      dispatch(setAccessToken(result.accessToken));
      toast.success(`User ${accountData.email} is successfuly regisrated!`);
      navigate("/");
    } catch (err: any) {
      console.log(err);
    }
  };

  if (isLoading)
    return (
      <div>
        <img src={loadingSvg} alt="Loading" />
      </div>
    );
  return (
    <div className="mt-[8%] flex w-full sm:max-w-sm flex-col items-center gap-6">
      <Tabs value={selectedCard}>
        <TabsList>
          <TabsTrigger
            value="account"
            onClick={() => setSelectedCard("account")}
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            onClick={() => setSelectedCard("password")}
          >
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <form
            onSubmit={accountForm.handleSubmit((data) => {
              setSelectedCard("password");
              setAccountData({ ...data });
            })}
          >
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Enter your full name and password to create an account
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Full Name</Label>
                  <Input
                    {...accountForm.register("fullName")}
                    id="tabs-demo-name"
                    placeholder="Enter your full name here"
                  />
                  {accountForm.formState.errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {accountForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Email</Label>
                  <Input
                    {...accountForm.register("email")}
                    id="tabs-demo-username"
                    type="email"
                    placeholder="Enter your Email here"
                  />
                  {accountForm.formState.errors.email && (
                    <p className="text-red-500 text-sm">
                      {accountForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Button type="submit">Continue</Button>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <p>Already have an account?</p>
                  <Button type="button" variant="outline">
                    <Link to="/auth/login">Log In</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        <TabsContent value="password">
          <form
            onSubmit={passwordForm.handleSubmit((data) => {
              onRegister({ ...accountData, password: data.password });
            })}
          >
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Type your passwords here. Passwords must be equal.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Password</Label>
                  <Input
                    {...passwordForm.register("password")}
                    id="tabs-demo-current"
                    type="password"
                    placeholder="Type password here"
                  />
                  {passwordForm.formState.errors.password && (
                    <p className="text-red-500 text-sm">
                      {passwordForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Same Password</Label>
                  <Input
                    {...passwordForm.register("confirmPassword")}
                    id="tabs-demo-new"
                    type="password"
                    placeholder="Retype password here"
                  />
                  {passwordForm.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {passwordForm.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Button type="submit">Register</Button>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <p>Already have an account?</p>
                  <Button variant="outline">
                    <Link to="/auth/login">Log In</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

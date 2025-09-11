import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Separator } from "@/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterPage = () => {
  const [selectedCard, setSelectedCard] = useState("account");
  const [accountData, setAccountData] = useState({ fullName: "", email: "" });

  const accountSchema = z.object({
    fullName: z.string().min(1, "Full name must be at least 1 character"),
    email: z.string().email("Invalid email address"),
  });

  const passwordSchema = z
    .object({
      password: z
        .string()
        .min(4, "Password must be at least 4 characters")
        .max(32, "Password must contain less than 32 symbols"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const accountForm = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  return (
    <div className="py-[8%] ">
      <h3 className=" text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Register
      </h3>
      <div className="my-8 flex w-full sm:max-w-sm flex-col items-center gap-6">
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
                    <Button variant="outline">
                      <Link to="/auth/register">Log In</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
          <TabsContent value="password">
            <form
              onSubmit={passwordForm.handleSubmit((data) => {
                console.log({ ...accountData, ...data });
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
    </div>
  );
};

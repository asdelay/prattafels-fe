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

export const RegisterPage = () => {
  const [selectedCard, setSelectedCard] = useState("account");
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
                    id="tabs-demo-name"
                    placeholder="Enter your full name here"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Email</Label>
                  <Input
                    id="tabs-demo-username"
                    type="email"
                    placeholder="Enter your Email here"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Button onClick={() => setSelectedCard("password")}>
                  Continue
                </Button>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <p>Already have an account?</p>
                  <Button variant="outline">
                    <Link to="/auth/register">Log In</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
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
                    id="tabs-demo-current"
                    type="password"
                    placeholder="Type password here"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Same Password</Label>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    placeholder="Retype password here"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Button>Register</Button>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <p>Already have an account?</p>
                  <Button variant="outline">
                    <Link to="/auth/login">Log In</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

export const LoginPage = () => {
  return (
    <div className="py-[8%] ">
      <h3 className=" text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Login
      </h3>

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
            <Input id="tabs-demo-name" placeholder="Enter your email here" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-username">Password</Label>
            <Input
              id="tabs-demo-username"
              type="password"
              placeholder="Enter your password here"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Log In</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

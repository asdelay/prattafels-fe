import { Outlet } from "react-router";
import { ModeToggle } from "./components/ModeToggle";
import { Toaster } from "./ui/sonner";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center px-4 md:px-8 lg:px-[200px]">
      <Toaster />
      <Outlet />
    </div>
  );
}

export default App;

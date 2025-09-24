import { Outlet } from "react-router";
import { Toaster } from "./ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="mt-16 flex-col items-center px-4 md:px-8 lg:px-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { LoginPage } from "./pages/LoginPage/index.ts";
import { RegisterPage } from "./pages/RegisterPage/index.ts";
import { MainPage } from "./pages/MainPage/index.ts";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import AuthLayout from "./components/AuthLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

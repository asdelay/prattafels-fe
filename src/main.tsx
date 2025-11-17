import { BrowserRouter, Outlet, Route, Routes } from "react-router";
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
import { AdminPage } from "./pages/AdminPage/index.ts";
import DashboardPage from "./pages/AdminPage/components/DashboardPage.tsx";
import { AdminEventsPage } from "./pages/AdminPage/components/EventsPage.tsx";
import OfficesPage from "./pages/AdminPage/components/OfficesPage.tsx";
import UsersPage from "./pages/AdminPage/components/UsersPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { AccountPage } from "./pages/AccountPage/index.ts";
import { Toaster } from "./ui/sonner.tsx";
import { Locations } from "./pages/LocationsPage/index.tsx";
import { EventsPage } from "./pages/EventsPage/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route
            element={
              <>
                <Toaster /> <Outlet />
              </>
            }
          >
            <Route path="/" element={<App />}>
              <Route index element={<MainPage />} />
              <Route path="locations" element={<Locations />} />
              <Route
                path="account"
                element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                }
              />
              <Route path="events">
                <Route index element={<EventsPage />} />
              </Route>
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute role={"User"}>
                  <AdminPage />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardPage />} />
              <Route path="events" element={<AdminEventsPage />} />
              <Route path="offices" element={<OfficesPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

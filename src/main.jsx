import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Routers";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <QueryClientProvider  client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> 
    </AuthProvider>
  </StrictMode>
);

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/sonner";
import "react-phone-number-input/style.css";
import { TooltipProvider } from "./components/ui/tooltip";
import InstallButton from "./components/shared/InstallButton";

const App = () => {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <RouterProvider router={router} />
        <InstallButton />
        <Toaster position="top-right" richColors expand={true} closeButton />
      </TooltipProvider>
    </HelmetProvider>
  );
};

export default App;

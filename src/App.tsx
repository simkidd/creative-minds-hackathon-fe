import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/sonner";
import 'react-phone-number-input/style.css'

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors expand={true} closeButton />
    </HelmetProvider>
  );
};

export default App;

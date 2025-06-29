import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComeFunziona from "./pages/ComeFunziona";
import Residenze from "./pages/Residenze";
import MedicalWellness from "./pages/MedicalWellness";
import VivereInTunisia from "./pages/VivereInTunisia";
import FaqPage from "./pages/FaqPage";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
          <Routes>

            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/come-funziona" element={<ComeFunziona />} />
            <Route path="/residenze" element={<Residenze />} />
            <Route path="/servizi-medici-benessere" element={<MedicalWellness />} />
            <Route path="/vivere-in-tunisia" element={<VivereInTunisia />} />
            <Route path="/contatti" element={<Contacts />} />
            <Route path="/faq" element={<FaqPage />} />



          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

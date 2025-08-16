import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import CollegeProjects from "./pages/CollegeProjects";
import EmbeddedSystems from "./pages/EmbeddedSystems";
import FirmwareDevelopment from "./pages/FirmwareDevelopment";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import FuntechGames from "./pages/FuntechGames";
import NotFound from "./pages/NotFound";
import AboutContact from "./pages/AboutContact";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import GetStarted from "./pages/GetStarted";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/college-projects" element={<CollegeProjects />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/embedded-systems" element={<EmbeddedSystems />} />
          <Route path="/firmware-development" element={<FirmwareDevelopment />} />
          <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/funtech-games" element={<FuntechGames />} />
          <Route path="/get-started" element={<GetStarted />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
  </QueryClientProvider>
);

export default App;

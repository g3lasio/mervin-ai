import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Integrations from "@/pages/Integrations";
import ComingSoon from "@/pages/ComingSoon";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/about-owlfenc" component={ComingSoon} />
      <Route path="/about-mervin" component={ComingSoon} />
      <Route path="/privacy-policy" component={ComingSoon} />
      <Route path="/terms-of-service" component={ComingSoon} />
      <Route path="/legal-policy" component={ComingSoon} />
      <Route component={ComingSoon} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

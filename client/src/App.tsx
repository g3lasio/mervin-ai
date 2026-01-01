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
import Resources from "@/pages/Resources";
import DocsHome from "@/pages/docs/DocsHome";
import CreatingFirstEstimate from "@/pages/docs/CreatingFirstEstimate";
import ManagingClients from "@/pages/docs/ManagingClients";
import FrequentlyAskedQuestions from "@/pages/docs/FrequentlyAskedQuestions";
import ComingSoonDoc from "@/pages/docs/ComingSoonDoc";

import AboutOwlFenc from "@/pages/AboutOwlFenc";
import AboutMervin from "@/pages/AboutMervin";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import LegalPolicy from "@/pages/LegalPolicy";
import ComingSoon from "@/pages/ComingSoon";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/docs" component={DocsHome} />
      <Route path="/docs/getting-started/creating-first-estimate" component={CreatingFirstEstimate} />
      <Route path="/docs/clients/managing-clients" component={ManagingClients} />
      <Route path="/docs/getting-started/faq" component={FrequentlyAskedQuestions} />
      <Route path="/docs/:category/:slug">
        {(params) => (
          <ComingSoonDoc
            title="Documentation Article"
            description="This article is coming soon"
            category={params.category}
            categoryTitle={params.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          />
        )}
      </Route>

      <Route path="/about-owlfenc" component={AboutOwlFenc} />
      <Route path="/about-mervin" component={AboutMervin} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/legal-policy" component={LegalPolicy} />
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

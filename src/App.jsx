import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
const queryClient = new QueryClient();
function Router() {
  return <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>;
}
function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <Router />
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>;
}
var stdin_default = App;
export {
  stdin_default as default
};

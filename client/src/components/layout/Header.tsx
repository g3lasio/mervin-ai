import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoBlack from '@assets/Black logo - no background_1762890715119.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const APP_URL = 'https://app.owlfenc.com';

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <img 
              src={logoBlack} 
              alt="Owl Fenc" 
              className="h-10 w-auto dark:invert"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/features" 
              className={`text-sm font-medium transition-colors hover:text-foreground px-3 py-2 rounded-md ${
                isActive('/features') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              data-testid="link-features"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-foreground px-3 py-2 rounded-md ${
                isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              data-testid="link-pricing"
            >
              Pricing
            </Link>
            <Link 
              href="/compare" 
              className={`text-sm font-medium transition-colors hover:text-foreground px-3 py-2 rounded-md ${
                isActive('/compare') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              data-testid="link-compare"
            >
              Compare
            </Link>
            <Link 
              href="/docs" 
              className={`text-sm font-medium transition-colors hover:text-foreground px-3 py-2 rounded-md ${
                isActive('/docs') || isActive('/resources') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              data-testid="link-resources"
            >
              Resources
            </Link>

            <div className="flex items-center gap-3 ml-4">
              <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer" data-testid="button-login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="button-signup" onClick={() => { if (window.fbq) window.fbq('track', 'CompleteRegistration'); }}>
                <Button size="sm">
                  Start Free Trial
                </Button>
              </a>
            </div>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/features" 
                className="text-sm font-medium px-3 py-2 rounded-md text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-features"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-sm font-medium px-3 py-2 rounded-md text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-pricing"
              >
                Pricing
              </Link>
              <Link 
                href="/compare" 
                className="text-sm font-medium px-3 py-2 rounded-md text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-compare"
              >
                Compare
              </Link>
              <Link 
                href="/docs" 
                className="text-sm font-medium px-3 py-2 rounded-md text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-resources"
              >
                Resources
              </Link>

              <div className="pt-3 border-t flex flex-col gap-2">
                <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer" className="w-full" data-testid="button-mobile-login">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </a>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="w-full" data-testid="button-mobile-signup" onClick={() => { if (window.fbq) window.fbq('track', 'CompleteRegistration'); }}>
                  <Button className="w-full">
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

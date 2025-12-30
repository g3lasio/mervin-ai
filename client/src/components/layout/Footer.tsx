import { Link } from 'wouter';
import { SiX, SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-12 border-t mt-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-features">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-owlfenc" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-about">
                  About Owl Fenc
                </Link>
              </li>
              <li>
                <Link href="/about-mervin" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-mervin">
                  About Mervin AI
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-legal">
                  Legal Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/owlfenc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/owlfenc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/owlfenc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Owl Fenc. All rights reserved. Built for contractors, by contractors.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <Construction className="h-24 w-24 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're working hard to bring you this content. Check back soon!
        </p>
        <Link href="/">
          <Button size="lg" data-testid="button-back-home">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

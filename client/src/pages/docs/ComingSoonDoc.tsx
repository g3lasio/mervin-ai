import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  Construction,
  ChevronRight
} from 'lucide-react';

interface ComingSoonDocProps {
  title: string;
  description: string;
  category: string;
  categoryTitle: string;
}

export default function ComingSoonDoc({
  title,
  description,
  category,
  categoryTitle
}: ComingSoonDocProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Owl Fenc Documentation</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/docs">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Documentation
              </Button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600">
              {categoryTitle}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              {description}
            </p>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardContent className="p-12 text-center">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Construction className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Documentation Coming Soon</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                      We're currently working on this article. Check back soon for detailed documentation on this topic.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-slate-500 mb-4">
                      In the meantime, you can:
                    </p>
                    <div className="space-y-2">
                      <Link href="/docs">
                        <Button variant="outline" className="w-full">
                          Browse Other Documentation
                        </Button>
                      </Link>
                      <Button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        asChild
                      >
                        <a href="https://owlfenc.replit.app/support/get-support" target="_blank" rel="noopener noreferrer">
                          Contact Support for Help
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Share2
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface DocArticleProps {
  title: string;
  description: string;
  content: string;
  category: string;
  categoryTitle: string;
  readTime: string;
  relatedArticles?: Array<{
    title: string;
    slug: string;
    category: string;
  }>;
}

export default function DocArticle({
  title,
  description,
  content,
  category,
  categoryTitle,
  readTime,
  relatedArticles = []
}: DocArticleProps) {
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

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime}
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate dark:prose-invert max-w-none
                  prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mb-4
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-base prose-p:leading-7 prose-p:mb-4
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:mb-2
                  prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                  prose-code:text-blue-600 dark:prose-code:text-blue-400
                  prose-code:bg-slate-100 dark:prose-code:bg-slate-800
                  prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950
                  prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500
                  prose-blockquote:pl-4 prose-blockquote:italic
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-a:no-underline hover:prose-a:underline
                ">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/docs/${article.category}/${article.slug}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-base">{article.title}</h3>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Help CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Our support team is here to assist you
                </p>
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  asChild
                >
                  <a href="https://owlfenc.replit.app/support/get-support" target="_blank" rel="noopener noreferrer">
                    Get Support
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

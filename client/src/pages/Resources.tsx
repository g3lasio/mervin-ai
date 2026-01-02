import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Resources() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to /docs after 2 seconds
    const timer = setTimeout(() => {
      setLocation('/docs');
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <>
      <Helmet>
        <title>Redirecting to Documentation | Owl Fenc</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block"
            >
              <BookOpen className="w-20 h-20 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Redirecting to Documentation
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            We've moved our documentation to a new, simplified location.
          </p>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400"
          >
            <span className="font-medium">Taking you there now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>

          <div className="mt-8">
            <a
              href="/docs"
              className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 underline"
            >
              Click here if not redirected automatically
            </a>
          </div>

          {/* Loading animation */}
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

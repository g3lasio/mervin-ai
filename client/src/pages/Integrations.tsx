import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { CheckCircle2, Database } from 'lucide-react';
import { SiStripe, SiOpenai, SiQuickbooks } from 'react-icons/si';

interface Integration {
  name: string;
  category: string;
  description: string;
  features: string[];
  status: 'active' | 'premium';
  color: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    category: 'Payments',
    description: 'Accept credit cards, debit cards, and ACH payments securely',
    features: [
      'Process credit and debit card payments',
      'ACH bank transfers for large payments',
      'Automatic receipt generation',
      'PCI-compliant payment processing',
    ],
    status: 'active',
    color: '#635bff',
    icon: SiStripe,
  },
  {
    name: 'OpenAI',
    category: 'AI Intelligence',
    description: 'Advanced AI for estimates, contracts, and customer communication',
    features: [
      'GPT-4 for intelligent conversations',
      'Natural language estimate creation',
      'Contract generation and review',
      'Customer inquiry responses',
    ],
    status: 'active',
    color: '#10a37f',
    icon: SiOpenai,
  },
  {
    name: 'Claude (Anthropic)',
    category: 'AI Intelligence',
    description: 'Advanced AI reasoning for complex construction scenarios',
    features: [
      'Deep analysis of project requirements',
      'Legal contract intelligence',
      'Technical specification review',
      'Cost estimation validation',
    ],
    status: 'active',
    color: '#f97316',
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    description: 'Seamless accounting integration for financial management',
    features: [
      'Automatic invoice sync',
      'Payment reconciliation',
      'Expense tracking',
      'Financial reporting',
    ],
    status: 'premium',
    color: '#2ca01c',
    icon: SiQuickbooks,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Integrations() {
  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Integraciones - Owl Fenc Platform</title>
        <meta name="description" content="Owl Fenc se integra con Stripe, OpenAI, Claude y QuickBooks para brindarte una experiencia completa de gestión de construcción. Powered by ATTOM Data." />
      </Helmet>

      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-integrations">
            Integraciones Disponibles
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conecta con las Herramientas que Necesitas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Owl Fenc se integra con plataformas líderes de la industria para brindarte 
            una solución completa de gestión de construcción.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {integrations.map((integration, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="hover-elevate transition-all h-full" data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: integration.color }}
                  >
                    {integration.icon ? (
                      <integration.icon className="w-6 h-6" />
                    ) : (
                      <span className="text-xl font-bold">
                        {integration.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <Badge 
                    variant={integration.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {integration.status === 'active' ? 'Active' : 'Premium'}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {integration.category}
                  </Badge>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold mb-2">Key Features:</div>
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Sources Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-muted/30">
            <CardContent className="p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Datos de Propiedad Confiables</h2>
                  <p className="text-muted-foreground mb-4 max-w-3xl">
                    Owl Fenc utiliza <strong>ATTOM Data</strong> como fuente de datos para verificación de propiedad, 
                    información de lotes, y datos de HOA. Esta información está integrada directamente en el sistema 
                    para brindarte datos precisos y actualizados sobre cada propiedad. <strong>No requiere configuración 
                    por parte del cliente</strong> — funciona automáticamente.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Verificación de titularidad de propiedad</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Información de límites y tamaño de lote</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Datos de HOA y restricciones de escritura</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Estimaciones de valor de propiedad</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

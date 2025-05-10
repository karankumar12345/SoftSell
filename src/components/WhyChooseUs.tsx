import { Shield, Clock, Target, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Bank-level security protocols and escrow services ensure your assets and data remain protected.',
    icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 2,
    title: 'Fast Processing',
    description: 'Get valuations within 24 hours and payment within days, not weeks or months.',
    icon: <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: 3,
    title: 'Maximum Value',
    description: 'Our extensive network of buyers ensures you get the highest possible value for your licenses.',
    icon: <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
  },
  {
    id: 4,
    title: 'Expert Support',
    description: 'Our team of licensing experts guides you through every step of the process.',
    icon: <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Why Choose SoftSell
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            We're committed to making the software license resale process easy, secure, and profitable for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
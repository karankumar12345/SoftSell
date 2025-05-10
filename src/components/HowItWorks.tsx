import { useState } from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload License',
    description: 'Submit your software license information through our secure portal.',
    icon: <Upload className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    details: 'Our process starts with you providing basic details about your unused licenses. Simply complete our online form with the software name, version, quantity, and purchase date. You can upload license certificates or purchase receipts to help us verify your ownership.',
  },
  {
    id: 2,
    title: 'Get Valuation',
    description: 'Receive a competitive market valuation within 24 hours.',
    icon: <DollarSign className="w-10 h-10 text-green-600 dark:text-green-400" />,
    details: 'Our team of experts analyzes the current market demand and pricing for your particular software licenses. We consider factors like software popularity, version, remaining support period, and transferability conditions to provide you with the most competitive quote possible.',
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment through your preferred method.',
    icon: <CreditCard className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    details: 'Once you accept our offer, we handle all the transfer paperwork and complete the purchase. You\'ll receive payment via your preferred method - direct bank transfer, PayPal, or cryptocurrency. Most payments are processed within 3-5 business days after license verification is complete.',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Our streamlined process makes selling your unused software licenses simple and profitable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6 md:mb-0 md:w-1/3 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg relative transform hover:-translate-y-1"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                {step.description}
              </p>
              
              {activeStep === step.id && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-10 text-left border border-gray-200 dark:border-gray-700 transition-colors">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{step.details}</p>
                </div>
              )}
              
              <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium cursor-pointer">
                Step {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
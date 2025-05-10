import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechStream Inc.',
    avatar: 'https://5.imimg.com/data5/SELLER/Default/2024/5/415115649/KQ/CB/GJ/83425492/pe-coated-paper.jpg',
    quote: 'SoftSell helped us recover almost 70% of our investment on unused Adobe licenses. The process was incredibly smooth and the team was professional throughout. I highly recommend their service to any company looking to recoup costs on software assets.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CFO',
    company: 'Quantum Dynamics',
    avatar: 'https://5.imimg.com/data5/SELLER/Default/2024/5/415115649/KQ/CB/GJ/83425492/pe-coated-paper.jpg',
    quote: 'When our company downsized, we had excess Microsoft and Autodesk licenses. SoftSell offered us a fair market price and handled all the transfer paperwork. Their expertise in software licensing saved us time and maximized our return.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Don't just take our word for it. Here's what our clients have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg">
                <div className="flex items-center">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder testimonials - to be replaced with real content
  const testimonials = [
    {
      quote: "[Placeholder] Testimonial about strategic impact and results achieved",
      author: "[Name]",
      title: "[Position]",
      company: "[Company]",
    },
    {
      quote: "[Placeholder] Testimonial about expertise and professional approach",
      author: "[Name]",
      title: "[Position]",
      company: "[Company]",
    },
    {
      quote: "[Placeholder] Testimonial about transformation and growth",
      author: "[Name]",
      title: "[Position]",
      company: "[Company]",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from businesses that have transformed their digital marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.title}</p>
                <p className="text-blue-400">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
            Read More Success Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 
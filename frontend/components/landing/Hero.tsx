import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BanknotesIcon, ArrowTrendingUpIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickStats = [
    {
      icon: BanknotesIcon,
      stat: "$300K+",
      label: "Client Savings",
    },
    {
      icon: ArrowTrendingUpIcon,
      stat: "50%+",
      label: "Revenue Growth",
    },
    {
      icon: ChartBarIcon,
      stat: "100+",
      label: "Projects Delivered",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl animate-slow-spin-reverse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          {/* Main heading with enhanced value proposition */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Enterprise-Grade Digital Marketing<br />
            <span className="text-3xl sm:text-4xl md:text-5xl">for Growing Businesses</span>
          </h1>
          
          {/* Enhanced subheading with clear value proposition */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100/90 max-w-3xl mx-auto mb-8">
            Unlock enterprise-level digital strategies and technology<br />
            without the enterprise-level price tag
          </p>

          {/* Quick stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:opacity-70"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/30">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.stat}</div>
                  <div className="text-blue-100/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 hover:bg-white/20 border border-white/20"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 
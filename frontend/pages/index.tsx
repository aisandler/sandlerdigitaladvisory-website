import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb, BarChart, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Develop comprehensive digital transformation roadmaps aligned with business objectives."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Technology Advisory",
      description: "Navigate technology decisions and architect solutions for sustainable growth."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Change Management",
      description: "Guide organizational transformation with proven methodologies and frameworks."
    }
  ];

  const expertiseAreas = [
    {
      title: "Digital Transformation Strategy",
      description: "We guide organizations through comprehensive digital transformations, aligning technology initiatives with business objectives to drive sustainable growth and competitive advantage.",
      points: [
        "Technology roadmap development",
        "Digital maturity assessment",
        "Innovation strategy",
        "Change management"
      ]
    },
    {
      title: "Technology Advisory Services",
      description: "Our advisory services help organizations make informed decisions about technology investments and implementations to maximize ROI and minimize risk.",
      points: [
        "Technology stack optimization",
        "Vendor selection & management",
        "Architecture planning",
        "Security & compliance"
      ]
    },
    {
      title: "Organizational Excellence",
      description: "We help organizations build the capabilities, processes, and culture needed to thrive in the digital age.",
      points: [
        "Process optimization",
        "Team structure & capabilities",
        "Agile transformation",
        "Digital culture development"
      ]
    },
    {
      title: "Data Strategy & Analytics",
      description: "Transform your organization's approach to data, enabling data-driven decision making and unlocking new business opportunities.",
      points: [
        "Data architecture design",
        "Analytics implementation",
        "BI strategy development",
        "Data governance"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-lg bg-white/80 z-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            SandlerDigitalAdvisory
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection(servicesRef)} className="text-gray-600 hover:text-blue-600 transition-all">
                Services
              </button>
              <button onClick={() => scrollToSection(expertiseRef)} className="text-gray-600 hover:text-blue-600 transition-all">
                Expertise
              </button>
              <Link href="/client-portal" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                Strategic Digital Leadership
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert guidance for digital transformation, strategy development, and organizational change.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:shadow-xl transition-shadow"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section ref={expertiseRef} className="py-20 bg-white" id="expertise">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combining deep industry knowledge with technical expertise to deliver transformative results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <ul className="space-y-3">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={contactRef} className="py-16" id="contact">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Start Your Digital Transformation</h2>
              <p className="text-gray-600">
                Schedule a consultation to discuss your digital transformation goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {['Name', 'Email', 'Company'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    name={field.toLowerCase()}
                    placeholder={field}
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white p-4 rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </>
                ) : (
                  <>
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm">
        © 2025 SandlerDigitalAdvisory LLC. All rights reserved.
      </footer>
    </div>
  );
} 
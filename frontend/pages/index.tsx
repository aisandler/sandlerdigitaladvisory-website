import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/landing/Navigation';
import Hero from '../components/landing/Hero';
import ProofPoints from '../components/landing/ProofPoints';
import AboutApproach from '../components/landing/AboutApproach';
import Services from '../components/landing/Services';
import EnterpriseEdge from '../components/landing/EnterpriseEdge';
import ClientSuccess from '../components/landing/ClientSuccess';
import Industries from '../components/landing/Industries';
import IdealClient from '../components/landing/IdealClient';
import Testimonials from '../components/landing/Testimonials';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandler Digital Advisory - Strategic Digital Marketing Leadership</title>
        <meta name="description" content="Digital marketing strategist bringing enterprise capabilities to small and medium businesses to accelerate growth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <ProofPoints />
          <AboutApproach />
        </div>
        <div id="services">
          <Services />
          <EnterpriseEdge />
        </div>
        <div id="case-studies">
          <ClientSuccess />
        </div>
        <div id="industries">
          <Industries />
          <IdealClient />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Ready to transform your digital marketing?
                <br />
                Let's start a conversation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-gray-400">[Placeholder] Location information</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-x-4">
                {/* Add social media links here */}
                <span className="text-gray-400">Social Media Links [Placeholder]</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sandler Digital Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 
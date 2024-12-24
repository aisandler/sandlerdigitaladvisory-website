import React from 'react';
import { ArrowRight, Lightbulb, Network, BarChart, Mail, Menu, X } from 'lucide-react';

const App = () => {
 const [isMenuOpen, setIsMenuOpen] = React.useState(false);

 return (
   <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow z-50">
       <div className="max-w-6xl mx-auto px-4 py-4">
         <div className="flex justify-between items-center">
           <div className="text-2xl font-bold text-gray-800">SandlerDigitalAdvisory</div>
           
           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>

           <div className="hidden md:flex items-center gap-6">
             <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
             <a href="#expertise" className="text-gray-600 hover:text-blue-600">Expertise</a>
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center">
               Contact
               <ArrowRight className="ml-2 h-4 w-4" />
             </button>
           </div>
         </div>

         {isMenuOpen && (
           <div className="md:hidden pt-4 pb-2">
             <a href="#services" className="block py-2 text-gray-600">Services</a>
             <a href="#expertise" className="block py-2 text-gray-600">Expertise</a>
           </div>
         )}
       </div>
     </nav>

     <div className="pt-24 max-w-6xl mx-auto px-4 py-20">
       <div className="text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           Transform Your Business with
           <span className="text-blue-600"> Strategic Digital Leadership</span>
         </h1>
         <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
           Expert guidance for digital transformation, strategy development, and organizational change.
         </p>
         <div className="flex justify-center gap-4">
           <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium text-lg">
             Schedule a Consultation
           </button>
         </div>
       </div>
     </div>

     <div id="services" className="max-w-6xl mx-auto px-4 py-16">
       <div className="grid md:grid-cols-3 gap-8">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
             <Lightbulb className="h-6 w-6 text-blue-600" />
           </div>
           <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
           <p className="text-gray-600">
             Develop comprehensive digital transformation roadmaps aligned with business objectives.
           </p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
             <Network className="h-6 w-6 text-blue-600" />
           </div>
           <h3 className="text-xl font-semibold mb-2">Technology Advisory</h3>
           <p className="text-gray-600">
             Navigate technology decisions and architect solutions for sustainable growth.
           </p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
             <BarChart className="h-6 w-6 text-blue-600" />
           </div>
           <h3 className="text-xl font-semibold mb-2">Change Management</h3>
           <p className="text-gray-600">
             Guide organizational transformation with proven methodologies and frameworks.
           </p>
         </div>
       </div>
     </div>

     <div id="expertise" className="max-w-6xl mx-auto px-4 py-16">
       <div className="text-center mb-12">
         <h2 className="text-3xl font-bold mb-4">Strategic Expertise</h2>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           Proven experience in digital transformation across industries and technologies.
         </p>
       </div>
       <div className="grid md:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <h3 className="text-xl font-semibold mb-4">Enterprise Transformation</h3>
           <ul className="space-y-3">
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Digital strategy development and execution</span>
             </li>
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Technology modernization roadmaps</span>
             </li>
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Operational efficiency optimization</span>
             </li>
           </ul>
         </div>
         <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <h3 className="text-xl font-semibold mb-4">Innovation & Growth</h3>
           <ul className="space-y-3">
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Digital product strategy and development</span>
             </li>
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Customer experience transformation</span>
             </li>
             <li className="flex items-center text-gray-600">
               <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
               <span>Data strategy and analytics enablement</span>
             </li>
           </ul>
         </div>
       </div>
     </div>

     <div id="contact" className="bg-gray-50 py-16">
       <div className="max-w-6xl mx-auto px-4">
         <div className="text-center mb-8">
           <h2 className="text-3xl font-bold mb-4">Start Your Digital Transformation</h2>
           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             Schedule a consultation to discuss your digital transformation goals.
           </p>
         </div>
         
        <form action="https://formspree.io/f/xldddlkr" method="POST" className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <div className="mb-4">
             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
             <input
               type="text"
               id="name"
               name="name"
               required
               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
             <input
               type="email"
               id="email"
               name="email"
               required
               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
             <input
               type="text"
               id="company"
               name="company"
               required
               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
             />
           </div>
           <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center">
             Schedule Consultation
             <Mail className="ml-2 h-5 w-5" />
           </button>
         </form>
       </div>
     </div>

     <footer className="bg-white border-t border-gray-100">
       <div className="max-w-6xl mx-auto px-4 py-8">
         <div className="text-center text-gray-600">
           © {new Date().getFullYear()} SandlerDigitalAdvisory. All rights reserved.
         </div>
       </div>
     </footer>
   </div>
 );
};

export default App;

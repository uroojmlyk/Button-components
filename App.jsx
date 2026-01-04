import React from 'react';
import Buttons from './Buttons';
import Cards from './Cards';
import Navbar from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tailwind Components
          </h1>
          <p className="text-gray-600 text-lg">
            Copy and paste these components in your StackBlitz project
          </p>
        </header>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Button Components</h2>
            <Buttons />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Card Components</h2>
            <Cards />
          </section>
          
          {/* Extra Component */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Use!</h2>
            <p className="text-lg mb-6">
              These components are ready to copy-paste into your StackBlitz project.
              Just create new files and paste the code.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Made with ❤️ using React & Tailwind CSS</p>
          <p className="text-gray-500 text-sm mt-2">Copy paste and start building!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
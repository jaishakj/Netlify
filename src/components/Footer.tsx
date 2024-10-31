import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Audio Description</a></li>
              <li><a href="#" className="hover:text-white transition">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition">Legal Notices</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Media Center</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition">Corporate Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Speed Test</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-sm">
          <p>© 2024 Netflix Clone. This is a demo project for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
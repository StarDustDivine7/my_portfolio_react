const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Debabrata Dutta. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, Groq, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

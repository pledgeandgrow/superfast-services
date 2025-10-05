export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 text-gray-400 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.webp" 
              alt="Superfast Services Logo" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm text-center">
            © 2025 Superfast Services. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#mission" className="hover:text-white transition">Mission</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

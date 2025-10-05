export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">SUPERFAST SERVICES</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#mission" className="text-gray-700 hover:text-blue-600 transition">Mission</a>
            <a href="#secteurs" className="text-gray-700 hover:text-blue-600 transition">Secteurs</a>
            <a href="#temoignages" className="text-gray-700 hover:text-blue-600 transition">Témoignages</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Obtenir une quotation
          </a>
        </div>
      </nav>
    </header>
  );
}

import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400">
            <Rocket size={18} className="text-black" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Assembly UI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#get-started" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

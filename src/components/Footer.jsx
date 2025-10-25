export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Assembly UI. All rights reserved.</p>
        </div>
        <div className="flex md:justify-end gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  );
}

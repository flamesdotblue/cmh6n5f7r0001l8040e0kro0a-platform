import { Rocket, Settings, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Iteration',
    desc: 'Prototype and ship ideas quickly with a fluid 3D-first workflow.'
  },
  {
    icon: Settings,
    title: 'Composable',
    desc: 'Modular building blocks that snap together like an assembly line.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Hardened defaults and best practices built into every layer.'
  },
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Polished interactions, motion, and accessibility out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Designed for momentum</h2>
          <p className="mt-3 text-white/70">
            From concept to production, create experiences that feel playful, modern, and unmistakably yours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500">
                  <Icon size={18} className="text-black" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

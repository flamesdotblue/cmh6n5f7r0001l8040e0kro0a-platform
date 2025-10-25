import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Build modern apps with a playful, vibrant assembly line
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80">
            A colorful 3D experience that merges technology, manufacturing, and digital interfaces into a single seamless workflow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
            >
              Launch Studio
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

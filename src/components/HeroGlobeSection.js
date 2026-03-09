"use client";

export default function HeroGlobeSection() {
  return (
    <div className="relative flex items-center justify-center mt-55 overflow-hidden">

      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-12 relative z-20">
        <div className="max-w-4xl mx-auto">

          <div className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-sm text-gray-300 mb-8">
            Supercharges Your Entire Dev Workflow with AI
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 leading-tight">
            Limitless
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Immersive digital experiences by blending cutting-edge technology
            with innovative storytelling.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition">
              Let’s Start
            </button>

            <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition">
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* ================= GLOBE SECTION ================= */}

      <div className="relative flex items-center justify-center mt-24 min-h-[500px] sm:min-h-[700px]">

        {/* Rotating Globe */}
        <div className="absolute w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1500px] lg:h-[1500px] animate-rotateSlow opacity-65">
          <img
            src="/globe.png"
            alt="Globe"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Blue Glow */}
        <div className="absolute w-[400px] sm:w-[600px] md:w-[900px] h-[300px] bg-blue-600/30 blur-[150px] rounded-full top-10" />

        {/* Bottom Dark Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black" />

        {/* TEXT ON GLOBE */}
        <div className="relative z-30 text-center px-6 py-32 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Urbanzi Delivers</span>
            <span className="block text-gray-200">B2B Virtual</span>
            <span className="block text-gray-300">Characters</span>
            <span className="block text-gray-400">Solutions</span>
            <span className="block text-gray-500">
              Customized For Businesses
            </span>
          </h2>
        </div>

      </div>

    </section>
  );
}
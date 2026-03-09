"use client";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center pt-24">

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-block bg-white/10 text-gray-300 text-xs tracking-widest px-4 py-2 rounded-md mb-6 uppercase">
              One Platform. Complete Digital Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">

              <span className="block">
                Empowering India's Digital Future with
              </span>

              <span className="block text-blue-400 italic font-medium">
                Urbanzi Solutions
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              At Urbanzi, we help businesses grow with innovative digital
              solutions. From web development to branding, we build
              experiences that elevate your brand.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition">
                Let’s Start
              </button>

              <button className="bg-gray-200 text-black hover:bg-white px-6 py-3 rounded-full font-medium transition">
                Our Solutions
              </button>

            </div>

          </div>

          {/* RIGHT SIDE (future image or animation) */}
          <div className="hidden lg:block"></div>

        </div>

      </div>

    </section>
  );
}
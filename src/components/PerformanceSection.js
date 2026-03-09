export default function PerformanceSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-16">
          We focus on one thing:
          <br />
          <span className="font-normal">
            Building digital solutions that truly perform.
          </span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-3">

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-3xl border border-white/5">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <p className="text-gray-300">
                  We combine smart technology, thoughtful design, and reliable systems
                  to help businesses operate better, scale faster, and make a meaningful impact.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-3xl border border-white/5">
              <p className="text-gray-300 mb-14">
                We prioritize long-term partnerships by delivering solutions that exceed expectations.
              </p>

              <h3 className="text-5xl font-bold text-blue-300">100%</h3>
              <p className="text-blue-300 mt-2 text-lg">
                Customer Satisfaction
              </p>
            </div>

          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col gap-3">

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-10 rounded-3xl border border-white/5 flex flex-col justify-center min-h-[300px]">
              <p className="text-gray-300 mb-10">
                Our team is always available to ensure your systems run smoothly,
                anytime you need us.
              </p>

              <h3 className="text-6xl font-bold text-blue-300">24/7</h3>
              <p className="text-blue-300 mt-2 text-xl">
                Support Available
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-3xl border border-white/5">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <p className="text-gray-300">
                  Trusted by growing businesses across industries.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col ">

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px]">
              <p className="text-gray-300 mb-49">
                We build secure, stable, and reliable platforms you can trust
                to perform without interruption.
              </p>

              <div>
                <h3 className="text-6xl font-bold text-blue-300">99.9%</h3>
                <p className="text-blue-300 mt-2 text-xl">
                  Uptime Guarantee
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
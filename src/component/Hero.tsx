import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="text-center lg:text-left">
          <span className="mb-5 inline-block rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
            Build. Choose. Create.
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
            Explore modern technologies and build a development stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="gradient-primary rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={hero}
            alt="DevStack development stack"
            className="h-auto w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// components/homepage/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center bg-white text-gray-900"
    >
      <div className="w-full px-0">
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen py-8 px-4 sm:px-8">
          {/* BG Image with reduced opacity */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
          </div>
          {/* Left: Text and Button */}
          <div className="relative z-10 w-full md:w-1/2 max-w-xl text-center md:text-left mb-0 md:mb-0 px-0 sm:px-8 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Hi, I&apos;m <span className="text-blue-500">Md Asifuzzaman Reyad</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
              I&apos;m a psychology graduate who loves technology. I enjoy using tech to solve problems and make life easier for people.
            </p>
            <Link href="#projects" legacyBehavior>
              <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-105">
                View My Work
              </a>
            </Link>
          </div>
          {/* Right: Image */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative">
              <Image
                src="/reyad.png"
                alt="Md Asifuzzaman Reyad"
                width={320}
                height={320}
                className="rounded-full border-4 opacity-80"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// components/homepage/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white text-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="/reyad.png" // Replace with your profile picture in public/images
            alt="Your Name"
            width={180}
            height={180}
            className="rounded-full mx-auto border-4 border-teal-500 shadow-lg"
            priority // Prioritize loading the hero image
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-teal-400">Md Asifuzzaman Reyad</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I'm a psychology graduate who loves technology. I enjoy using tech to solve problems and make life easier for people.
        </p>
        <div className="space-x-4 space-y-4 sm:space-y-2 sm:space-x-4">
          <Link href="#projects" legacyBehavior>
            <a className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              View My Work
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-850 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Psychology meets tech — here's my story.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 min-h-[400px]">
          <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden ring-2 ring-teal-500 shadow-2xl">
              <Image
                src="/reyad.png"
                alt="About me"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 text-base sm:text-lg text-gray-600 space-y-5 leading-relaxed">
            <p>
              I'm Reyad — a psychology graduate who loves building things with technology. My curiosity about how people think drives me to create user-friendly digital experiences.
            </p>
            <p>
              I enjoy turning ideas into clean, simple, and useful products using tools like React and Next.js.
            </p>
            <p>
              Outside of coding, I love learning new things, thinking deeply, and working on projects that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const codeSnippet = `
class Developer {
  constructor() {
    this.name = "John Doe";
    this.role = "Flutter App Developer";
    this.skills = ["Flutter", "Dart", "Firebase", "React Native"];
  }

  sayHello() {
    return \`Hello, I'm \${this.name} and I build beautiful mobile apps.\`;
  }
}

const me = new Developer();
console.log(me.sayHello());
`;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <Card className="overflow-hidden bg-transparent border-none shadow-none">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8">
            <div className="flex items-center gap-6 mb-6">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt="Developer's Headshot"
                  width={100}
                  height={100}
                  className="rounded-full object-cover ring-4 ring-primary"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <div>
                <h3 className="text-2xl font-bold font-headline">John Doe</h3>
                <p className="text-primary">Flutter App Developer</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate and results-oriented Flutter developer with a
                proven track record of creating high-quality, user-centric
                mobile applications. With a strong foundation in Dart and a deep
                understanding of the Flutter framework, I specialize in building
                cross-platform apps that are both beautiful and performant.
              </p>
              <p>
                My journey into mobile development started with a fascination for
                how technology can solve real-world problems. I've worked on
                various projects, from small-scale utilities to complex,
                data-driven applications for enterprise clients. Some of my past work includes a social media app for niche communities (see{' '}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Project Link</a>) and an e-commerce platform that streamlined the checkout process (repo at{' '}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>). These experiences have equipped me with a versatile skill set and a problem-solving mindset.
              </p>
            </div>
          </div>
          <div className="bg-muted/40 p-6 md:p-8 rounded-lg">
            <pre className="language-javascript bg-background/50 rounded-lg p-4 overflow-x-auto text-sm font-code h-full">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </Card>
    </section>
  );
}

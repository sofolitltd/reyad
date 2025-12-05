import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const codeSnippet = `
// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text("Reyad's Portfolio")),
        body: const Center(child: Text('Hello, Flutter!')),
      ),
    );
  }
}
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
                <h3 className="text-2xl font-bold font-headline">Reyad</h3>
                <p className="text-primary">Flutter Developer</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate and results-driven Flutter developer with a knack for creating beautiful, high-performance cross-platform applications. With a strong foundation in Dart and a deep understanding of the Flutter framework, I specialize in building mobile apps that provide a seamless user experience on both iOS and Android.
              </p>
              <p>
                My journey into mobile development started with a fascination for building things that people can interact with on-the-go. I enjoy tackling complex challenges and turning ideas into polished, production-ready apps. Check out my work and contributions on{' '}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="bg-muted/40 p-6 md:p-8 rounded-lg">
            <pre className="language-dart bg-background/50 rounded-lg p-4 overflow-x-auto text-sm font-code h-full">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </Card>
    </section>
  );
}

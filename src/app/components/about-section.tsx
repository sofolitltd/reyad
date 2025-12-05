import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Code, GitBranch, Facebook, Linkedin, Youtube, User, Feather } from "lucide-react";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const codeSnippet = `
// lib/widgets/profile_card.dart
import 'package:flutter/material.dart';

class ProfileCard extends StatelessWidget {
  const ProfileCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: Colors.grey[850],
        borderRadius: BorderRadius.circular(12.0),
      ),
      child: Column(
        children: [
          CircleAvatar(
            radius: 50,
            backgroundImage: NetworkImage(
              "https://reyad.vercel.app/reyad.png"
            ),
          ),
          const SizedBox(height: 16),
          const Text(
            "Md Asifuzzaman Reyad",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const Text(
            "Flutter Developer",
            style: TextStyle(
              fontSize: 16,
              color: Colors.blueAccent,
            ),
          ),
        ],
      ),
    );
  }
}
`;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile & Info */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="overflow-hidden text-center">
            <CardContent className="p-6">
              {profileImage && (
                <Image
                  src="https://reyad.vercel.app/reyad.png"
                  alt="Developer's Headshot"
                  width={120}
                  height={120}
                  className="rounded-full object-cover ring-4 ring-primary mx-auto mb-4"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <h3 className="text-2xl font-bold font-headline">Md Asifuzzaman Reyad</h3>
              <p className="text-primary">Flutter Developer</p>
              <div className="flex justify-center gap-4 mt-4">
                <Link href="#" aria-label="Facebook Profile">
                  <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn Profile">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="YouTube Channel">
                  <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I am a passionate and results-driven Flutter developer with a knack for creating beautiful, high-performance cross-platform applications. My journey into mobile development started with a fascination for building things that people can interact with on-the-go.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <Feather className="w-5 h-5 text-primary" />
                My Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in clean code, elegant design, and user-centric solutions. For me, developing an app is not just about writing code; it's about crafting an experience that is both intuitive and enjoyable for the end-user.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Code Snippet */}
        <div className="lg:col-span-2">
           <Card className="h-full flex flex-col">
             <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    What I'm Working On
                </CardTitle>
             </CardHeader>
            <CardContent className="flex-grow">
                 <pre className="language-dart bg-muted/40 rounded-lg p-4 overflow-x-auto text-sm font-code h-full">
                    <code>{codeSnippet}</code>
                </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

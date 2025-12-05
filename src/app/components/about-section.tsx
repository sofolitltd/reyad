import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Code, GitBranch, User, Feather, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sofolitltd",
    icon: FaGithub,
    label: "GitHub Profile",
    color: "text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/asifuzzamanreyad",
    icon: FaLinkedin,
    label: "LinkedIn Profile",
    color: "hover:text-primary",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/asifuzzamanreyad",
    icon: FaFacebook,
    label: "Facebook Profile",
    color: "hover:text-primary",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@sofolitltd",
    icon: FaYoutube,
    label: "YouTube Channel",
    color: "hover:text-red-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+8801704340860",
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "hover:text-green-500",
  },
];

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
    <section id="about" className="scroll-mt-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
        {/* Left Column: Profile & Info */}
        <div className="space-y-8">
          <Card className="overflow-hidden text-center">
            <CardContent className="p-6">
              {profileImage && (
                <Image
                  src="https://reyad.vercel.app/_next/image?url=%2Freyad.png&w=640&q=75"
                  alt="Developer's Headshot"
                  width={120}
                  height={120}
                  className="rounded-full object-cover ring-4 ring-primary mx-auto mb-4"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <h3 className="text-2xl font-bold font-headline">Md Asifuzzaman Reyad</h3>
              <p className="text-primary">Flutter Developer</p>
              <div className="flex justify-center gap-2 mt-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <link.icon className={`w-5 h-5 text-muted-foreground transition-colors ${link.color}`} />
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild>
                    <Link href="/reyad-cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                    </Link>
                </Button>
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
        <div className="space-y-8">
           <Card className="h-full flex flex-col">
             <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    What I'm Working On
                </CardTitle>
             </CardHeader>
            <CardContent className="flex-grow">
                 <pre className="language-dart bg-muted/40 rounded-lg p-4 text-sm font-code h-full overflow-x-auto whitespace-pre-wrap">
                    <code>{codeSnippet}</code>
                </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

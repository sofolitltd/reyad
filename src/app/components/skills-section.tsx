import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/lib/types";
import { Code, Database, Smartphone, GitBranch, Feather } from "lucide-react";

const skills: Skill[] = [
  { name: "Flutter", level: "Expert", icon: Feather },
  { name: "Dart", level: "Expert", icon: Code },
  { name: "Firebase", level: "Advanced", icon: Database },
  { name: "Git", level: "Advanced", icon: GitBranch },
  { name: "Riverpod", level: "Advanced", icon: Code },
  { name: "REST APIs", level: "Intermediate", icon: Code },
  { name: "Getx", level: "Intermediate", icon: Code },
  { name: "UI/UX Design", level: "Intermediate", icon: Smartphone },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline text-foreground">
        My Technical Arsenal
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 md:p-6 text-center bg-card hover:bg-muted/50 transition-colors"
          >
            <CardHeader className="p-0 mb-3">
              <skill.icon className="w-10 h-10 text-primary mx-auto" />
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-center">
              <p className="font-bold text-sm md:text-base">{skill.name}</p>
              <Badge
                variant="secondary"
                className="mt-2 text-xs font-normal"
              >
                {skill.level}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

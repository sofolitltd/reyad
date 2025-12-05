import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/types";
import { Code, Database, Smartphone, GitBranch } from "lucide-react";

const skills: Skill[] = [
  { name: "Flutter", proficiency: 95, icon: Smartphone },
  { name: "Dart", proficiency: 90, icon: Code },
  { name: "Firebase", proficiency: 85, icon: Database },
  { name: "Git", proficiency: 80, icon: GitBranch },
  { name: "React Native", proficiency: 70, icon: Smartphone },
  { name: "Bloc/Provider", proficiency: 90, icon: Code },
  { name: "REST APIs", proficiency: 85, icon: Code },
  { name: "UI/UX Design", proficiency: 75, icon: Smartphone },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline text-foreground">
        Skills & Technologies
      </h2>
      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2 bg-card p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

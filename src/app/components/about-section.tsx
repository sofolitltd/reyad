import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const codeSnippet = `
// MainActivity.kt
import androidx.activity.compose.setContent
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Greeting(name = "Reyad")
        }
    }
}

@Composable
fun Greeting(name: String) {
    Text(text = "Hello, $name! Welcome to my portfolio.")
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
                <p className="text-primary">Android Developer</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a dedicated and detail-oriented Android developer with a
                passion for crafting high-quality, user-friendly mobile
                applications. With a strong command of Kotlin and a deep
                understanding of the Android SDK and Jetpack Compose, I specialize in
                building native apps that are both robust and visually appealing.
              </p>
              <p>
                My journey into mobile development was sparked by a desire to build
                tools that make a difference in people's daily lives. I've had the
                opportunity to work on a variety of projects, from personal utilities to
                complex, scalable applications for a wide range of users. You can check out some of my work on{' '}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="bg-muted/40 p-6 md:p-8 rounded-lg">
            <pre className="language-kotlin bg-background/50 rounded-lg p-4 overflow-x-auto text-sm font-code h-full">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </Card>
    </section>
  );
}

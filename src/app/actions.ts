"use server";

import { z } from "zod";
import { generateProjectSummary } from "@/ai/flows/generate-project-summary";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // In a real application, you would send an email or save to a database here.
  console.log("Contact form submitted:", validatedFields.data);

  return { message: "Thank you for your message! I'll get back to you soon." };
}

export async function generateProjectSummaryAction(repoLink: string) {
  if (!repoLink || !repoLink.startsWith("https://github.com/")) {
    return {
      success: false,
      error: "Please provide a valid GitHub repository link.",
    };
  }
  try {
    const result = await generateProjectSummary({ repoLink });
    return { success: true, summary: result.summary };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to generate summary." };
  }
}

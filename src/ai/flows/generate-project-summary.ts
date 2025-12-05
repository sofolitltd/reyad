'use server';

/**
 * @fileOverview Generates a project summary from a GitHub repository link using AI.
 *
 * - generateProjectSummary - A function that generates the project summary.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  repoLink: z
    .string()
    .url()
    .describe('The link to the GitHub repository for the project.'),
});
export type GenerateProjectSummaryInput = z.infer<typeof GenerateProjectSummaryInputSchema>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and informative summary of the project.'),
});
export type GenerateProjectSummaryOutput = z.infer<typeof GenerateProjectSummaryOutputSchema>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an AI assistant that generates concise and informative project summaries from a GitHub repository link.

  Given the following repository link, generate a summary of the project:

  Repository Link: {{{repoLink}}}

  Summary:`, // Keep it simple; more complex prompts can be tested later.
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

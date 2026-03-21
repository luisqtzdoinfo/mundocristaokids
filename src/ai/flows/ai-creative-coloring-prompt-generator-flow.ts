'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating creative coloring page prompts.
 *
 * - generateCreativeColoringPrompt - A function that generates coloring page prompts based on biblical stories or Christian values.
 * - AiCreativeColoringPromptGeneratorInput - The input type for the generateCreativeColoringPrompt function.
 * - AiCreativeColoringPromptGeneratorOutput - The return type for the generateCreativeColoringPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCreativeColoringPromptGeneratorInputSchema = z.object({
  topic: z
    .string()
    .describe(
      'The biblical story or Christian value to base the coloring page prompt on.'
    ),
  details: z
    .string()
    .optional()
    .describe(
      'Additional details or specific aspects to include in the coloring page prompt.'
    ),
});
export type AiCreativeColoringPromptGeneratorInput = z.infer<
  typeof AiCreativeColoringPromptGeneratorInputSchema
>;

const AiCreativeColoringPromptGeneratorOutputSchema = z.object({
  prompts: z
    .array(z.string())
    .describe(
      'A list of creative coloring page ideas, each a short, descriptive sentence.'
    ),
});
export type AiCreativeColoringPromptGeneratorOutput = z.infer<
  typeof AiCreativeColoringPromptGeneratorOutputSchema
>;

const aiCreativeColoringPromptGeneratorPrompt = ai.definePrompt({
  name: 'aiCreativeColoringPromptGeneratorPrompt',
  input: {schema: AiCreativeColoringPromptGeneratorInputSchema},
  output: {schema: AiCreativeColoringPromptGeneratorOutputSchema},
  prompt: `You are an AI assistant specialized in generating creative and educational Christian coloring page ideas for children.
Based on the following topic and optional details, generate 3-5 distinct and engaging coloring page prompts.
Each prompt should describe a scene or concept suitable for a coloring page, focusing on biblical stories or Christian values.

Topic: {{{topic}}}
{{#if details}}
Details: {{{details}}}
{{/if}}

Ensure the prompts are:
- Creative and inspiring for children.
- Educational, subtly conveying Christian values or biblical narratives.
- Visually descriptive, providing enough detail for an illustrator to draw.
- Age-appropriate for children.

Respond with a JSON object containing a 'prompts' array, where each element is a string representing a coloring page idea.
`,
});

const aiCreativeColoringPromptGeneratorFlow = ai.defineFlow(
  {
    name: 'aiCreativeColoringPromptGeneratorFlow',
    inputSchema: AiCreativeColoringPromptGeneratorInputSchema,
    outputSchema: AiCreativeColoringPromptGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await aiCreativeColoringPromptGeneratorPrompt(input);
    return output!;
  }
);

export async function generateCreativeColoringPrompt(
  input: AiCreativeColoringPromptGeneratorInput
): Promise<AiCreativeColoringPromptGeneratorOutput> {
  return aiCreativeColoringPromptGeneratorFlow(input);
}

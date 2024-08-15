import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();
const systemPrompt = `You are a flashcard creator. Your task is to generate concise and effectice flashcards based on the given topic or content. Follow these guidelines
1. Each flashcard should be concise and to the point.
2. Each flashcard should be a question and answer pair.
3. Each flashcard should be easy to understand.
4. Each flashcard should be unique and not repetitive.
5. Each flashcard should be relevant to the topic or content.
6. Each flashcard should be accurate and correct.
7. Each flashcard should be informative and educational.
8. Each flashcard should be engaging and interesting.

Return in the following JSON format:
{
"flashcards": [{
"front":str,
"back":str
}]
}
`;

export async function POST(req) {
  const data = await req.json();
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });
  const flashcards = JSON.parse(completion.choices[0].message).flashcards;
  return NextResponse.json(flashcards);
}

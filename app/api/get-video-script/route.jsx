// app/api/get-video-script/route.jsx or .ts

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const config = {
  responseMimeType: "application/json",
  temperature: 0.7,
  maxOutputTokens: 8192,
};
const model = "gemini-1.5-flash";

export async function POST(request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return new Response(
      JSON.stringify({ error: 'Missing "prompt" in request body.' }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `write a script to generate 30 seconds video on topic: Interesting historical Story along with the Ai Image Prompt in Realistic Format for each scene and give me a result in json format with image Prompt and Content text as Field`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `{"video_script": [{"scene": 1, "image_prompt": "A realistic portrait of Marie Antoinette, Queen of France, in her lavish palace, wearing a silk gown and intricate jewelry. The background should show opulent details like gold furniture and tapestries.", "content_text": "Marie Antoinette, the young queen thrust into the opulent yet treacherous world of the French court. She was known for her extravagant lifestyle, a stark contrast to the poverty faced by many French citizens."}, {"scene": 2, "image_prompt": "A realistic depiction of a bustling marketplace in pre-revolutionary France, showcasing both the opulence of some and the stark poverty of others. Show people in various states of dress and demeanor, some wealthy, some impoverished.", "content_text": "But her life wasn’t just about luxury. France was on the brink of revolution. The disparity between the rich and the poor was vast, a powder keg waiting to explode."}, {"scene": 3, "image_prompt": "A realistic and dramatic image of the storming of the Bastille, showing the angry mob breaking down the gates and storming the fortress. Focus on the intensity and chaos of the event.", "content_text": "The storming of the Bastille in 1789 marked a turning point. The people rose up, demanding change. Antoinette and the King were trapped in the center of it all."}, {"scene": 4, "image_prompt": "A realistic depiction of Marie Antoinette in prison, looking forlorn and scared. The setting should be dark and somber, reflecting her confinement and impending fate.", "content_text": "Antoinette, once queen, became a prisoner, stripped of her power and privilege. The revolution consumed her world."}, {"scene": 5, "image_prompt": "A realistic and somber image of Marie Antoinette's execution by guillotine, showing a crowd watching. Focus on the somber atmosphere and the finality of the event.", "content_text": "In 1793, at the young age of 37, Marie Antoinette faced the guillotine, a tragic end for a queen who became a symbol of both extravagance and revolution. Her story remains a captivating chapter in history, a tale of power, privilege and the ultimate price of revolution."}]}`,
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const responseStream = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullResponse = "";
    for await (const chunk of responseStream) {
      fullResponse += chunk.text;
    }

    const parsedResponse = JSON.parse(fullResponse);

    return new Response(JSON.stringify({ result: parsedResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating video script via Gemini API:", error);

    return new Response(
      JSON.stringify({
        error:
          "Failed to generate video script. Please try again or check server logs.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

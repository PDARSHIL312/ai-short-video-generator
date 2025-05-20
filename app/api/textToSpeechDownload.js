import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
dotenv.config();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // default voice (Rachel)

// Function to generate and download speech as MP3
export default generateSpeechFromScript = async (
  video_script,
  outputFileName = "narration.mp3"
) => {
  const combinedText = video_script
    .map((scene) => scene.content_text)
    .join(" ");

  try {
    const response = await axios({
      method: "POST",
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      data: {
        text: combinedText,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.7,
          similarity_boost: 0.75,
        },
      },
      responseType: "stream",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
    });

    const filePath = path.join(__dirname, outputFileName);
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    writer.on("finish", () => {
      console.log(`✅ MP3 downloaded as ${outputFileName}`);
    });

    writer.on("error", (err) => {
      console.error("❌ Error writing file:", err);
    });
  } catch (error) {
    console.error(
      "❌ Failed to generate speech:",
      error.response?.data || error.message
    );
  }
};

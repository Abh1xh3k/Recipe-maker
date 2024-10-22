import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAhfiTEPWHCozTEGGijkSQIMXzVa3Adfl8");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generate(prompt) {
  const result = await model.generateContent(prompt);
  let data = result.response.text();
    data = data.replace(/```javascript/g, '');
    console.log(data); 
    try {
      data = JSON.parse(data); 
    } catch (error) {
      console.error("Failed to parse response as JSON", error);
    }
  return result;
}

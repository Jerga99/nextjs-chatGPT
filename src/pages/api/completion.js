
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function completion(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const prompt = body.prompt || "";

    // const aiResponse = "React JS is a library for creating UIs...";
    // await new Promise((res) => setTimeout(res, 500));

    try {
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        max_tokens: 1024
      });

      const aiResponse = (completion.data.choices[0].text).trim();
      return res.status(200).json({result: aiResponse});
    } catch(e) {
      console.log(e.message);
      return res.status(500).json({error: {message: e.message}});
    }
  } else {
    return res.status(500).json({error: {message: "Invalid Api Route"}})
  }
}


import { Configuration, OpenAIApi } from "openai";
import { withNextSession } from "@/lib/session";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const AI_PROMPT = "The following is a conversation with Walt. Walt is helpful and creative. Walt's only knowledge is React JS library. He can only answer questions related to React JS. He only cares about React JS. Walt provides often code examples. Walt provides answers formated in markdown format."
const AI_RESPONSE = "```js\nimport React from 'react';\n\nconst MyComponent = () => {\n  return <div>I'm a simple component!</div>;\n};\n\nexport default MyComponent;\n```\n\nThis example is a basic React component. It imports the React library, defines a component function, and returns a DOM element. Finally, the component is exported so it can be imported and used in other components.";

export default withNextSession(async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const prompt = body.prompt || "";

    console.log("SESSION: " + req.session);

    await new Promise((res) => setTimeout(res, 500));
    return res.status(200).json({result: AI_RESPONSE});

    try {
      const openai = new OpenAIApi(configuration);

      const formatedPrompt = AI_PROMPT + "\n" + prompt + "\n" + "Walt:";

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: formatedPrompt,
        temperature: 0.7,
        max_tokens: 1024
      });

      const aiResponse = (completion.data.choices[0].text).trim();
      return res.status(200).json({result: aiResponse});
    } catch(e) {
      console.log(e.message);
      return res.status(500).json({error: {message: e.message}});
    }
  } else if (req.method === "PUT") {
    const {uid} = req.query;

    if (!uid) {
      return res.status(500).json({error: {message: "Invalid uid provided!"}});
    }

    req.session.user = {
      uid
    };

    await req.session.save();
    
    return res.status(200).json(uid);
  } else {
    return res.status(500).json({error: {message: "Invalid Api Route"}})
  }
})

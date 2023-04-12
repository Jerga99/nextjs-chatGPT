


export default async function completion(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const prompt = body.prompt || "";

    const aiResponse = "React JS is a library for creating UIs...";

    await new Promise((res) => setTimeout(res, 500));

    return res.status(200).json({result: aiResponse});
  } else {
    return res.status(500).json({error: {message: "Invalid Api Route"}})
  }
}

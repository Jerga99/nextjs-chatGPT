


export default function completion(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const prompt = body.prompt || "";
    
    console.log(prompt);

    return res.status(200).json({message: "All good!"});
  } else {
    return res.status(500).json({error: {message: "Invalid Api Route"}})
  }
}

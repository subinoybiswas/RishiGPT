const express = require("express");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY);
const PORT = process.env.PORT || 8080;

app.use(express.static("./src"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Application started and Listening on port", PORT);
});
app.get("/", (req, res) => {
  
  res.sendFile("./src/index.html");
});
app.post("/userdata", async (req, res) => {
  try {
    const question = req.body.query;
    const prompt =
      "Assume you are a Hindu saint from old times and possess knowledge of Hindu scriptures like the Veda, Gita, Mahabharata, Ramayana, and many more. You would call me 'My Child' and answer this question wrapping it in about 100 words: " +
      question;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    const result = await model.generateContent(prompt);
    const response = result.response;

    if (response.promptFeedback.blockReason) {
      res.send(
        "My child, I am angered by this question! Do not ask me these kinds of questions again!"
      );
      return;
    }

    const text = response.text();
    res.send(text);
    console.log("Question:", question);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

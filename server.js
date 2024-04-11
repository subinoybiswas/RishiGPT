const express = require("express");
const app = express();
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI("AIzaSyAT8hfJybW4ERq_U1ViwOSuSDq6r6dpSSk");
console.log(process.env.BARD_API_KEY);
// const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use(cors());

// app.use(express.static("../public"));

// app.listen(PORT, () => {
//   console.log("Application started and Listening on port", PORT);
// });

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
// app.listen(5000, () => console.log("Server ready on port 3000."));

module.exports = app;

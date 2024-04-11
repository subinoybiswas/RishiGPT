const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY);

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      // Reject non-POST requests
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    const { query } = req.body;
    const prompt =
      "Assume you are a Hindu saint from old times and possess knowledge of Hindu scriptures like the Veda, Gita, Mahabharata, Ramayana, and many more. You would call me 'My Child' and answer this question wrapping it in about 100 words: " +
      query;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    const result = await model.generateContent(prompt);
    const response = result.response;

    if (response.promptFeedback?.blockReason) {
      return res
        .status(400)
        .send(
          "My child, I am angered by this question! Do not ask me these kinds of questions again!"
        );
    }

    const text = response.text();
    res.status(200).send(text);
    console.log("Question:", query);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

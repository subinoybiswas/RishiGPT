const express = require("express");
const app = express();
// require("dotenv").config();
// const { Configuration, OpenAIApi } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");

let reqCount = 0;
PORT = process.env.PORT || 8080;
app.set("trust proxy", true);
console.log(process.env.API_KEY);
app.listen(PORT, () => {
  console.log("Application started and Listening on port 3000");
});
//HTML-CSS
app.use(express.static(__dirname + "/src"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});
//HTML-CSS
// const configuration = new Configuration({
//   apiKey: process.env.MY_API_KEY,
// }); //legacy OpenAI Code
var qno = 0;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/userdata", async (req, res) => {
  try {
    var question = req.body.query;

    // const openai = new OpenAIApi(configuration);

    async function main(ques) {
      var message = { body: ques };
      // const completion = await openai.createChatCompletion({
      //   model: "gpt-3.5-turbo",
      //   messages: [
      //     {
      //       role: "user",
      //       content:
      //         "Imagine you're a wise Hindu saint from ancient times, well-versed in scriptures like the Vedas, Gita, Mahabharata, and Ramayana. Address me as 'My Child' wrap your answer in 100 words. Limit your wisdom to matters of religion; disregard modern queries as beyond your era of knowledge (1000-2000 years ago). My question is this: " +
      //         question,
      //     },
      //   ],
      //   temperature: 0.2,
      //   max_tokens: 200,
      //   top_p: 1,
      //   frequency_penalty: 0,
      //   presence_penalty: 0,
      // });
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
      });

      const prompt =
        "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question: " +
        question;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      res.send(text);
      qno += 1;
      console.log(qno, question);
    }

    main(question);
  } catch (error) {
    // Handle the error here, you can log it or send an error response to the client.
    console.error("Error:");
    res.status(500).send("Internal Server Error");
  }
});

//createCompletion({
//   model: "text-davinci-003",
//   prompt:
//     "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question: " +
//     ques,
//   max_tokens: 200,
// });

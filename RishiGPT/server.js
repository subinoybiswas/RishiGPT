const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
let reqCount = 0;
console.log(process.env.API_KEY);
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
//HTML-CSS
app.use(express.static(__dirname + "/src"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});
//HTML-CSS
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

app.post("/userdata", (req, res) => {
  var question = req.body.query;

  const openai = new OpenAIApi(configuration);
  async function main(ques) {
    var message = { body: ques };
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question:" +
            question + "Make your answer about 150 words and don't have any unfinished sentences and complete each of the sentences in the word limit."+"Also make sure you don't answer any coding related questions. You are a saint from 1000-2000 years ago so don't answer to any modern questions and say you don't have knowlege of these modern questions.",
        },
      ],
      temperature: 0.2,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(completion.data.choices[0].message.content);
    req+=1;
    console.log(req+question);
  }

  main(question);
});
//createCompletion({
//   model: "text-davinci-003",
//   prompt:
//     "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question: " +
//     ques,
//   max_tokens: 200,
// });

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
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
     prompt:  "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question:" +
            ques +
            "If your response is small add some small quotations of about 100words from any scriptures and make the complete response about 70 words and don't have unfinished sentences and don't add anything a saint isn't supposed to know",
      temperature: 0.2,
      max_tokens: 100,
      
    });
    reqCount += 1;

    console.log(reqCount + ") User Asked: " + ques);

    res.send(completion.data.choices[0].message.content);
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

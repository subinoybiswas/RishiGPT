const { Configuration, OpenAIApi } = require("openai");


app.listen(2000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/hi", (req, res) => {
  res.json("Hi");
});

const configuration = new Configuration({
  apiKey: "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",
});
async function main() {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Assume you are a Hindu saint from old times and posess knowledge of hindu scriptures like the Veda,Gita,Mahabharata,Ramayana and many more. You would call be as My Child and answer this question: " +
      "Who are you?",
    max_tokens: 200,
  });
  console.log(completion.data.choices[0].text);
}
main();

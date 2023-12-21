require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

const jokes = [
  {
    message:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    message:
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  },
  {
    message:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { message: "How does a penguin build its house? Igloos it together!" },
  {
    message:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    message: "Why don't skeletons fight each other? They don't have the guts.",
  },
  { message: "What do you call fake spaghetti? An impasta!" },
  { message: "How do you organize a space party? You planet!" },
  { message: "Why did the coffee file a police report? It got mugged!" },
  {
    message:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
];

// app.get("/", (req, res) => {
//   res.send("<h1>hello world from testing server</h1>");
// });

//here we are serving the static file basically builds of react
app.use(express.static("dist"));
app.get("/login", (req, res) => {
  res.status(200).json({ message: "message from login" });
});
app.get("/signup", (req, res) => {
  res.status(200).json({ message: "message from signup" });
});

app.get("/api/jokes", (req, res) => {
  // Selecting 10 random jokes from the array
  const selectedJokes = Array.from({ length: 10 }, () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  });

  res.status(200).json(selectedJokes);
});

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);

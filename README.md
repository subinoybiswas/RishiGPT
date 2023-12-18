# RishiGPT - AI Chatbot with the Wisdom of an Indian Monk

RishiGPT is an AI-powered chatbot designed to provide insightful and wise responses based on the knowledge and teachings of a Rishi or Indian Monk. This project combines the power of the Google Generative API and the GenerateContent method from the Gemini Pro language model(Previously, it used the power of the OpenAI API and the CreateChatCompletion method from the OpenAI GPT-3.5 language model). The front end is built using HTML and CSS, and the back end is developed using Node.js and Express.js.
## Visit the App
- You can find the live app [here.](https://rishigpt.subinoy.me/)
- See the Demo Video [here.](https://www.youtube.com/watch?v=LxT5nWDTq8Q)
## Features

- Conversational Interface: Users can engage in a natural language conversation with RishiGPT, asking questions or seeking advice on various topics.
- Wisdom of a Rishi: RishiGPT leverages the extensive knowledge and teachings of a Rishi, providing thoughtful and insightful responses to user queries.
- Bard API Integration: The chatbot uses the GenerativeAI API and the GenerateContent method to generate responses based on user inputs.
- OpenAI API Integration: The chatbot uses the OpenAI API and the CreateChatCompletion method to generate responses based on user inputs.(`deprecrated`)
- Easy to Use: The chatbot interface is intuitive and user-friendly, making it accessible to many users.
- Backend Integration: The backend is built using Node.js and Express.js, enabling seamless communication between the frontend and Generative AI API from Google. 

## Installation

To set up RishiGPT locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/subinoybiswas/RishiGPT.git
```

2. Navigate to the project directory:

```bash
cd RishiGPT/
```

3. Install the dependencies:

```bash
npm install
```

4.
a) Configure OpenAI API:
   - Sign up for an account and obtain an API key from the [](https://platform.openai.com/signup).
   - Replace the placeholder value for `BARD_API_KEY` in the environment variables section on your system)
b) Configure Gemini Pro API:
   - Sign up for an account and obtain an API key from the [Google MakerSuite Portal](https://makersuite.google.com/waitlist).
   - Replace the placeholder value for `BARD_API_KEY` in the environment variables section on your device
6. Start the development server:

```bash
node server.js
```

6. Open your web browser and visit `http://localhost:8080` to access RishiGPT.

## Configuration

The configuration options for RishiGPT are in server.js and you need to add an environment varriable.

- `BARD_API_KEY`: Your OpenAI API key/BARD API key for authentication added in the environment varriable o fyour system.
- `temperature`: Controls how creative the model is. (upto 1.0)(For GPT 3.5)
- `max_tokens`: Determines the maximum number of tokens to generate in the completion.(For GPT 3.5)

## Backend API

RishiGPT utilizes a backend API built with Node.js and Express.js to communicate with the OpenAI API and generate responses. The API endpoints are defined in the `server.js` file. You can extend or modify the API functionality to suit your needs.

## Frontend

The front end of RishiGPT is built using HTML, CSS, and JavaScript. The user interface is located in the `src` directory and consists of `index.html`, `main.css`, and `work.js` files. You can customize the frontend design and layout by modifying these files.

## Deployment

To deploy RishiGPT to a live server, follow these general steps:

### Online Deployment
1. Choose a hosting provider or platform that supports Node.js applications.
2. Set up the hosting environment and ensure that Node.js and npm are installed.
3. Upload the project files to the server or use version control to deploy from a repository.
4. Install the project dependencies using `npm install`.
5. Configure the environment variables, including the OpenAI API key, required for deployment.
6. Start the Node.js application using a process manager like PM2 or Supervisor.
7. Update the frontend API endpoint to match your deployment URL.
8. Access the deployed RishiGPT through the provided URL.

## Contributing

Contributions to RishiGPT are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request. Make sure to follow the established coding conventions and provide detailed information about your changes.

## License

RishiGPT is open source and distributed under the [MIT License](https://opensource.org/licenses/MIT). You are free to modify and use the code according to the license.


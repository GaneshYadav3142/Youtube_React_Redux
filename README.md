# Youtube Clone

This project is a full-fledged YouTube clone that replicates the core functionalities of the popular video-sharing platform, YouTube. The application is built using React and Redux, providing users with the ability to browse, search, and watch videos, as well as interact with comments and likes.

## Features

- **User Authentication**: Users can sign up, log in, and log out. Authentication is required to access certain features like commenting and liking videos.

- **Video Search**: Users can search for videos based on keywords. The application retrieves relevant results from the YouTube API and displays them to the user.

- **Video Player**: When a user selects a video from the search results or from the homepage, the video player allows them to watch the video along with its description and related videos.

- **Comments**: Users can view comments on a video and post their own comments if they are logged in.

- **Likes**: Authenticated users can like and dislike videos.

- **Responsive Design**: The application is designed to be responsive and compatible with various screen sizes and devices.

## Deployment

The application is deployed on Netlify. You can access the live version of the application using the following link: [Netlify Deploy link](https://calm-starburst-e729b2.netlify.app)

## Prerequisites

To run this application locally, you will need the following prerequisites:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn (v1 or higher)

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-youtube-clone.git
cd your-youtube-clone
```

2. Install dependencies:

If you're using npm:

```bash
npm install
```

If you're using Yarn:

```bash
yarn install
```

3. Obtain API Key:

To make use of the YouTube API for video search and playback, you will need to obtain a YouTube Data API v3 key. Set up your API key by following the instructions provided by the YouTube API documentation.

4. Configure API Key:

Create a `.env` file in the root of the project and add your YouTube API key:

```plaintext
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
```

5. Start the development server:

If you're using npm:

```bash
npm start
```

If you're using Yarn:

```bash
yarn start
```

6. Open your web browser and visit `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please create a pull request. Before submitting a pull request, make sure to discuss your changes with the repository maintainers.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

-Really Appreciating the efforts for the guidance provided from Video of JavaScript Mastery Channel
- The application makes use of the YouTube API for video data.
- This project was inspired by the YouTube platform, and its design and UI are based on YouTube's interface.

---

With this readme file, users and developers will have a clear understanding of the project's features, how to set it up locally, and any other important details they need to know.


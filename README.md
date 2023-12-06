# Contactr: Your Personal Network Tracker

Welcome to Contactr, a specialized app designed for job seekers. Contactr aims to streamline the process of creating, managing, and expanding your professional network. This application leverages the MVC architecture, incorporating robust authorization features, allowing users to register and curate their personal contact lists within the platform.

## Table of Contents
- [Project Repository](#project-repository)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Configuration](#configuration)
- [License](#license)

## Project Repository

Explore our 2022 group project repository on GitHub: [Contactr Repository](https://github.com/anthonypz/todo-mvc-auth-local)

## Demo

You can check out a live demo of Contactr here: [Contactr Demo](https://contactr-demo.herokuapp.com/)

![Screenshot of Contactr Landing Page](https://user-images.githubusercontent.com/13573733/189439207-0b7279d9-9056-49b9-bca1-d75387616c11.png)

## Technology Stack

**Technologies Used:**

- HTML
- CSS
- JavaScript
- Express
- MongoDB
- Mongoose
- Passport.js
- bcrypt
- Bootstrap

Contactr utilizes a variety of technologies to deliver a seamless experience:

- **Back-end**: The back-end of this application is crafted using Node.js and the Express framework, proficiently handling all routes and controller logic.

- **View**: We chose EJS as our templating engine for the View, providing a flexible and efficient way to render dynamic content.

- **Database**: MongoDB and Mongoose are employed to drive our database and Model logic, ensuring efficient data storage and retrieval.

- **Authentication**: Passport.js is utilized for user authentication, offering a robust and customizable authentication system.

- **Security**: User passwords are securely stored with salting and hashing using bcrypt, ensuring the protection of user data.

- **Front-end**: Bootstrap is employed to refine the front-end aesthetics, resulting in an appealing and responsive user interface.

## Configuration

Before running the Contactr application, make sure to set up your configuration by creating a `.env` file. You can use the `sample.env` file in the repository as a template. Replace the placeholders with your actual values for database connection, Google OAuth client ID and client secret, and the desired port number.

To set up your configuration, follow these steps:

1. Copy the `sample.env` file to a new file named `.env`.
2. Open the `.env` file and replace the following placeholders with your actual values:
   - `DB_STRING`: Your MongoDB Atlas connection string.
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID (if applicable).
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret (if applicable).
   - `PORT`: The desired port number for your Contactr application.

Now you're ready to run Contactr with your customized configuration.

## License

Contactr is licensed under the MIT License. You can find the full text of the license in the [LICENSE](LICENSE) file in the project repository.

Feel free to explore the Contactr repository and try out the application to enhance your professional networking experience.
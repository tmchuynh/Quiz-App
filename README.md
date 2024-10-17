# Quiz Application

This is a web-based **Quiz Application** that allows users to register, log in, take quizzes, and view their past quiz scores. The application stores user data in `localStorage` and tracks quiz progress in `sessionStorage`.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Future Improvements](#future-improvements)

## Features

- **User Registration & Login**: Users can register by providing their first name, last name, email, and username. Registered users can log in to start a quiz.
- **Quiz Functionality**: Users can take quizzes on various topics, with each quiz storing the user’s progress.
- **Score Tracking**: After completing a quiz, users can view their scores. The application tracks scores for each user and allows sorting by percentage or date.
- **Session Persistence**: Quiz progress is stored in `sessionStorage` and user data (including past scores) in `localStorage`, so progress is retained across sessions.
- **Sorting**: Past scores can be sorted by date or percentage of correct answers.
- **Responsive UI**: The application features a clean, minimalistic design using the **NES.css** framework.

## Technologies Used

- **HTML/CSS/JavaScript**: Core web technologies for structuring and styling the app.
- **NES.css**: A retro-themed CSS framework for styling UI elements.
- **localStorage**: Used to persist user data such as quiz scores and login details across sessions.
- **sessionStorage**: Used to store temporary data like quiz progress during a session.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```
   
2. **Navigate to the Project Directory**:
   ```bash
   cd quiz-app
   ```

3. **Open `index.html`** in your browser to run the application:
   ```bash
   open index.html
   ```

   Or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to run it.

## Usage

1. **Register an Account**:
   - Enter your first name, last name, email, and create a username and password.
   
2. **Login**:
   - Use your registered username and password to log in.
   
3. **Start a Quiz**:
   - Once logged in, you can take the quiz. Answer each question, and your progress will be saved automatically.

4. **View Scores**:
   - After completing the quiz, your score will be displayed. You can sort your past scores by date or percentage using the provided buttons.

5. **Reset Scores**:
   - If needed, you can reset your quiz scores via the "Reset All Scores" button.

## Code Structure

```bash
.
├── index.html              # Main HTML file for the quiz app
├── main.css               # Main stylesheet
├── index.js                # Main JavaScript file containing the app logic
└── README.md               # Project README file
```

### Key Functions:
- **User Registration**: Handles user data validation, password hashing, and storage in `localStorage`.
- **Login Authentication**: Checks user credentials and allows access to the quiz if valid.
- **Quiz Logic**: Manages question display, quiz progress, and score calculation.
- **Score Sorting**: Allows users to sort their scores by percentage or date.
- **Dynamic UI Updates**: Uses JavaScript to dynamically create, remove, and update UI sections like the quiz, score table, and registration/login forms.

## Future Improvements

- **Question Randomization**: Add the ability to randomize quiz questions for each session.
- **Multiple Quizzes**: Introduce more quizzes on different topics and allow users to select which quiz to take.
- **Timer**: Implement a timer feature to limit how long a user has to answer each question.
- **Leaderboard**: Add a leaderboard to compare scores between users.
- **User Authentication**: Integrate a back-end system for more secure user authentication and data storage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

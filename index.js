"use strict";
// Quiz Data
const quizData = [
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "Which of the following is a noble gas?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Argon", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the pH of pure water?",
        answers: [
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is the primary component of natural gas?",
        answers: [
            { text: "Ethane", correct: false },
            { text: "Propane", correct: false },
            { text: "Methane", correct: true },
            { text: "Butane", correct: false }
        ]
    },
    {
        question: "Which acid is found in citrus fruits?",
        answers: [
            { text: "Acetic acid", correct: false },
            { text: "Citric acid", correct: true },
            { text: "Lactic acid", correct: false },
            { text: "Sulfuric acid", correct: false }
        ]
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "What type of bond involves the sharing of electron pairs between atoms?",
        answers: [
            { text: "Ionic bond", correct: false },
            { text: "Covalent bond", correct: true },
            { text: "Metallic bond", correct: false },
            { text: "Hydrogen bond", correct: false }
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Lithium", correct: false },
            { text: "Oxygen", correct: false }
        ]
    },
    {
        question: "What is the process of a solid turning directly into a gas called?",
        answers: [
            { text: "Condensation", correct: false },
            { text: "Sublimation", correct: true },
            { text: "Evaporation", correct: false },
            { text: "Deposition", correct: false }
        ]
    },
    {
        question: "Which of the following is a base?",
        answers: [
            { text: "Hydrochloric acid", correct: false },
            { text: "Sodium hydroxide", correct: true },
            { text: "Acetic acid", correct: false },
            { text: "Sulfuric acid", correct: false }
        ]
    }
];



// Create the global variables
let currentQuestion = 0;
const totalQuestions = quizData.length; // Total number of questions
let score = 0;
// DOM Elements
const loginContainer = document.querySelector(".loginContainer");
const displayContainer = document.querySelector(".displayContainer");
// Function to remove an element by its ID
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove(); // Remove the element from the DOM
    }
}
// Function to remove the registration section
function removeRegisterSection() {
    removeElementById("registerSection");
}
// Function to remove the login section
function removeLoginSection() {
    removeElementById("loginSection");
}
// Function to remove the quiz section
function removeQuizSection() {
    removeElementById("quizSection");
}
// Function to remove the score section
function removeScoreSection() {
    removeElementById("scoreSection");
}
// Function to remove the past scores section
function removePastScoresSection() {
    removeElementById("pastScoresSection");
}
// Function to remove all sections dynamically
function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removePastScoresSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-default"); // Remove the dialog
}
// Function to create and append the registration form dynamically
function createRegisterSection() {
    var _a;
    const registerSection = document.createElement("div");
    registerSection.classList.add("nes-container", "is-rounded", "registeration-section");
    registerSection.id = "registerSection";
    registerSection.innerHTML = `
        <h2 class="nes-text">Register</h2>
        <label for="firstName" class="nes-text">First Name:</label>
        <input type="text" id="firstName" class="nes-input" placeholder="Enter first name" />
        <label for="lastName" class="nes-text">Last Name:</label>
        <input type="text" id="lastName" class="nes-input" placeholder="Enter last name" />
        <label for="email" class="nes-text">Email:</label>
        <input type="email" id="email" class="nes-input" placeholder="Enter email" />
        <label for="registerUsername" class="nes-text">Username:</label>
        <input type="text" id="registerUsername" class="nes-input" placeholder="Enter username" />
        <label for="registerPassword" class="nes-text">Password:</label>
        <input type="password" id="registerPassword" class="nes-input" placeholder="Enter password" />
        <label for="confirmPassword" class="nes-text">Retype Password:</label>
        <input type="password" id="confirmPassword" class="nes-input" placeholder="Retype password" />
        <div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="registerPasswordView">
			<label class="form-check-label" for="registerPasswordView">
				Show Password
			</label>
		</div>
        <button id="registerButton" class="nes-btn is-success">Register</button>
        <p id="registerError" class="nes-text is-error" style="display:none;"></p>
    `;
    // Append the dynamically created register section to the loginContainer
    (_a = document.querySelector(".loginContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(registerSection);
    // Attach event listener to the register button
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", validateRegistrationForm);
    // Attach event listener for the Enter key on the register section
    registerSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateRegistrationForm();
        }
    });
    // Retrieve input elements by their IDs and attach event listeners to them
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    // Attach input event listeners to all input fields for clearing error styles
    [firstName, lastName, email, registerUsername, registerPassword, confirmPassword].forEach((field) => {
        field.addEventListener("input", clearErrorStyles);
    });
    const checkbox = loginContainer.querySelector('#registerPasswordView');
    const passwordElement = document.querySelector("#registerPassword");
    const confirmPasswordElement = document.querySelector("#confirmPassword");

    checkbox.addEventListener('change', function () {
        if ($(this).is(':checked')) {
            passwordElement.type = "text";
            confirmPasswordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
            confirmPasswordElement.type = "password";
        }
    });
}
// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
// Validate registration form
/**
 * Validates the registration form and performs necessary checks.
 * 
 * @returns {Promise<void>} - A promise that resolves when the form is successfully validated and the user is registered.
 */
async function validateRegistrationForm() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    const fields = [
        { element: firstName, name: "First Name" },
        { element: lastName, name: "Last Name" },
        { element: email, name: "Email" },
        { element: registerUsername, name: "Username" },
        { element: registerPassword, name: "Password" },
        { element: confirmPassword, name: "Confirm Password" },
    ];
    // Reset previous error styles
    resetErrorStyles(fields);
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none";
    // Basic validation
    for (const field of fields) {
        const value = field.element.value.trim();
        if (!value) {
            showError(`${field.name} is required.`, field.element);
            return;
        }
    }
    const userEmail = email.value.trim();
    if (!validateEmail(userEmail)) {
        showError("Please enter a valid email address.", email);
        return;
    }
    const password = registerPassword.value.trim();
    const confirmPwd = confirmPassword.value.trim();
    if (!isValidPassword(password)) {
        showError("Password must be at least 8 characters long and contain at least one symbol.", registerPassword);
        return;
    }
    if (password !== confirmPwd) {
        showError("Passwords do not match.", registerPassword);
        showError("Passwords do not match.", confirmPassword);
        return;
    }
    // Check if user already exists
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    if (isUsernameTaken(registerUsername.value.trim(), users)) {
        showError("Username already exists.", registerUsername);
        return;
    }
    // Register the new user
    await registerUser(fields);
}
function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("is-error");
    });
}
function showError(message, field) {
    const registerError = document.getElementById("registerError");
    registerError.textContent = message;
    registerError.style.display = "block";
    field.classList.add("is-error");
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
}
function isUsernameTaken(username, users) {
    return users.some((user) => user.username === username);
}
function getRegisterFormFields() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const registerUsername = document.getElementById("registerUsername");
    const registerPassword = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    return { firstName, lastName, email, registerUsername, registerPassword, confirmPassword };
}
/**
 * Registers a new user and updates the user interface.
 * 
 * @param {Array} fields - An array of input fields containing user information.
 * The expected order of fields is: firstName, lastName, email, username, and password.
 * 
 * @returns {Promise<void>} - A promise that resolves when the user registration and UI update are complete.
 */
async function registerUser(fields) {
    // Hash the password before storing it
    const hashedPassword = await hashPassword(fields[4].element.value.trim());

    const newUser = {
        id: generateUniqueId(),
        firstName: fields[0].element.value.trim(),
        lastName: fields[1].element.value.trim(),
        username: fields[3].element.value.trim(),
        password: hashedPassword, // Store the hashed password
    };

    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array in localStorage
    sessionStorage.setItem("users", JSON.stringify(users));

    // Update the UI to transition from registration to login
    const registerSection = document.getElementById("registerSection");
    const loginSection = document.getElementById("loginSection");
    registerSection.style.display = "none";
    loginSection.style.display = "block"; // Go to login after registration
}
// Helper function to hash the password (SHA-256 example)
/**
 * Hashes a password using the SHA-256 algorithm.
 * 
 * @param {string} password - The password to be hashed.
 * 
 * @returns {Promise<string>} - A promise that resolves to the hashed password as a hexadecimal string.
 */
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}
// Function to generate a unique ID
function generateUniqueId() {
    return "user_" + (Math.floor(Math.random() * 1650) + 256); // Simple unique ID
}
// Function to remove error classes and hide the error message
/**
 * Removes error classes and hides the registration error message.
 * 
 * This function is called when the user interacts with the registration form fields.
 * It ensures that any previous error styles are cleared and the error message is hidden.
 * 
 * @returns {void}
 */
function clearErrorStyles() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    const fields = [
        firstName,
        lastName,
        email,
        registerUsername,
        registerPassword,
        confirmPassword,
    ];

    // Remove error class from all fields
    fields.forEach((field) => field.classList.remove("is-error"));

    // Hide error message
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none";
}
// Function to create and append the login form dynamically
function createLoginSection() {
    var _a;
    const loginSection = document.createElement("div");
    loginSection.classList.add("nes-container", "is-rounded", "login-section");
    loginSection.id = "loginSection";
    loginSection.innerHTML = `
        <h2 class="nes-text">Login</h2>
        <label for="loginUsername" class="nes-text">Username:</label>
        <input type="text" id="loginUsername" class="nes-input" placeholder="Enter username" />
        <label for="loginPassword" class="nes-text">Password:</label>
        <input type="password" id="loginPassword" class="nes-input" placeholder="Enter password" />
        <div class="form-check">
			<input class="form-check-input" name="checkbox" type="checkbox" value="" id="loginPasswordView">
			<label class="form-check-label" for="loginPasswordView">
				Show Password
			</label>
		</div>
        <button id="loginButton" class="nes-btn is-primary">Login</button>
        <p id="loginError" class="nes-text is-error" style="display:none;">Incorrect username or password.</p>
    `;
    loginContainer.appendChild(loginSection);
    (_a = document.querySelector("#loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateLoginForm);
    loginSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateLoginForm();
        }
    });
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    // Attach the same event listener to both login input fields
    [loginUsername, loginPassword].forEach((field) => {
        field.addEventListener("input", clearLoginErrorStyles);
    });
    const checkbox = loginContainer.querySelector('#loginPasswordView');

    const passwordElement = document.querySelector("#loginPassword");
    checkbox.addEventListener('change', function () {
        if ($(this).is(':checked')) {
            passwordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
        }
    });
}
// Validate login form
async function validateLoginForm() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    // Reset error styles for both fields
    const fields = [loginUsername, loginPassword];
    fields.forEach((field) => field.classList.remove("is-error"));
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
    // Check if either field is blank
    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";
        // Add 'is-error' class to empty fields
        fields.forEach((field) => {
            if (!field.value.trim()) {
                field.classList.add("is-error");
            }
        });
        return;
    }
    // Retrieve users from localStorage
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    // Hash the entered password for comparison
    const hashedPassword = await hashPassword(password);
    // Find the user with matching username and hashed password
    const user = users.find((user) => user.username === username && user.password === hashedPassword);
    // Login logic
    if (user) {
        handleLoginSuccess(user); // On successful login
    }
    else {
        handleLoginError("Incorrect username or password."); // On login failure
    }
}
function getLoginFormFields() {
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    return { loginUsername, loginPassword };
}
// Helper function to handle login errors
function handleLoginError(message) {
    const loginError = document.getElementById("loginError");
    loginError.textContent = message;
    loginError.style.display = "block";
    const { loginUsername, loginPassword } = getLoginFormFields();
    [loginUsername, loginPassword].forEach((field) => field.classList.add("is-error"));
}
// Helper function to handle successful login
/**
 * Handles the successful login by setting the current session user's data in local storage,
 * hiding any previous login error, and loading the quiz.
 * 
 * @param {Object} user - The user object representing the logged-in user.
 * The object should have properties: id, firstName, lastName, and username.
 * 
 * @returns {void}
 */
function handleLoginSuccess(user) {
    // Set current session user
    localStorage.setItem("currentUserId", user.id);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("username", user.username);

    const loginError = document.getElementById("loginError");
    loginError.style.display = "none"; // Hide any previous error

    // Load user data and proceed to the quiz
    loadQuiz(); // Proceed to quiz section
}
/**
 * Removes error classes and hides the login error message.
 * 
 * @returns {void}
 */
function clearLoginErrorStyles() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const fields = [loginUsername, loginPassword];

    // Remove error class from both fields
    fields.forEach((field) => field.classList.remove("is-error"));

    // Hide error message
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
}
/**
 * Adds an event listener to the logout button, which clears the quiz progress,
 * removes all sections, creates the registration and login sections, clears the welcome message,
 * and clears all data from local storage when clicked.
 * 
 * @returns {void}
 */
function logoutEventListener() {
    var _a;
    (_a = document.querySelector("#logoutButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        sessionStorage.removeItem("quizProgress"); // Remove any quiz progress
        // Redirect to the login page
        removeAllSections();
        createRegisterSection();
        createLoginSection();
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = ""; // Clear welcome message
        }
        localStorage.clear();
    });
}
/**
 * Clears all data from local storage when the user closes the browser tab.
 * 
 * @returns {void}
 */
window.addEventListener('beforeunload', () => {
    localStorage.clear();
});
// Function to create and append the quiz section dynamically
function createQuizSection() {
    const quizSection = document.createElement("div");
    quizSection.classList.add("nes-container", "is-rounded", "quiz-section");
    quizSection.id = "quizSection";
    quizSection.innerHTML = `
        <div class="question-container">
            <p id="question"></p>
        </div>
        <div id="answers"></div>
        <progress class="nes-progress is-pattern" value="50" max="100" id="quizProgressBar"></progress>
    `;
    displayContainer.appendChild(quizSection);
}
// Function to create and append the score section dynamically
function createScoreSection() {
    var _a;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("nes-container", "is-rounded", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="nes-text">Quiz Completed!</h2>
        <p id="scoreMessage"></p>
        <button id="retryButton" class="nes-btn is-warning retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_a = document.querySelector("#retryButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => returnToBeginning());
}
// Function to create the past scores section dynamically
function createPastScoresSection() {
    var _a;
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("nes-container", "is-rounded", "view-score-history");
    pastScoresSection.id = "pastScoresSection";
    pastScoresSection.innerHTML = `
        <h2 class="nes-text">Past Scores</h2>
        <table id="pastScores" class="scores-table" style="width: 100%; border-collapse: collapse;"></table>
        <button id="backButton" class="nes-btn">Back to Quiz</button>
    `;
    displayContainer.appendChild(pastScoresSection);
    const currentUserId = localStorage.getItem("currentUserId");
    (_a = document.querySelector("#backButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("pastScoresSection");
        if (checkProgressAtEnd(currentUserId)) {
            showScore();
        }
        else {
            !loadQuiz();
        }
    });
}
// Function to create and append the action buttons dynamically
function createActionButtons() {
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
}
/**
 * Creates and appends buttons for viewing and resetting past scores.
 * 
 * @returns {void}
 */
function createScoresButtons() {
    var _a, _b;

    // Remove existing action buttons
    removeElementById("actionButtons");

    // Create new action buttons section
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="viewScoresButton" class="nes-btn is-success">View Past Scores</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
    `;

    // Append the action buttons section to the display container
    displayContainer.appendChild(actionButtons);

    // Add event listeners for the logout button, view scores button, and reset scores button
    logoutEventListener();

    // Add event listener for the "View Past Scores" button
    (_a = document.querySelector("#viewScoresButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        createSortButtons();
    });

    // Add event listener for the "Reset All Scores" button
    (_b = document.querySelector("#resetScoresButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
/**
 * Creates and appends buttons for sorting past scores.
 * 
 * @returns {void}
 */
function createSortButtons() {
    var _a, _b, _c;

    // Remove existing action buttons
    removeElementById("actionButtons");

    // Create new action buttons section
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
        <button id="sortByDateButton" class="nes-btn is-primary">Sort by Date</button>
        <button id="sortByScoreButton" class="nes-btn is-primary">Sort by Score</button>
    `;

    // Append the action buttons section to the display container
    displayContainer.appendChild(actionButtons);

    // Add event listeners for the logout button, reset scores button, and sort buttons
    logoutEventListener();

    // Get the current user ID
    const currentUserId = localStorage.getItem("currentUserId");

    // Construct the key for the user's scores in local storage
    const userScoresKey = `quizScores_${currentUserId}`;

    // Retrieve the user's past scores from local storage
    const pastScores = JSON.parse(sessionStorage.getItem(userScoresKey) || "[]");

    // Render the past scores in a table format
    renderScores(pastScores);

    // Add event listener for the "Sort by Date" button
    (_a = document.querySelector("#sortByDateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // Sort past scores by date (newest to oldest)
        const sortedByDate = [...pastScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Render the sorted scores
        renderScores(sortedByDate);
    });

    // Add event listener for the "Sort by Score" button
    (_b = document.querySelector("#sortByScoreButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        // Sort past scores by score (highest to lowest)
        const sortedByPercentage = [...pastScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });

        // Render the sorted scores
        renderScores(sortedByPercentage);
    });

    // Add event listener for the "Reset All Scores" button
    (_c = document.querySelector("#resetScoresButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}

/**
 * Renders the past scores in a table format.
 * 
 * @param {Array} pastScores - An array of objects representing past scores.
 * Each object should have properties: score, total, and date.
 * 
 * @returns {void}
 */
function renderScores(pastScores) {
    // Remove existing sections
    removeElementById("quizSection");
    removeElementById("scoreSection");
    removeElementById("pastScoresSection");
    // Create the past scores section dynamically
    createPastScoresSection();
    // Create table headers and rows for the scores
    const tableHeaders = `
        <tr>
            <th>Score</th>
            <th>Percentage</th>
            <th class="scoreDate">Date</th>
        </tr>`;
    const tableRows = pastScores
        .map(({ score, total, date }) => {
            const percentage = ((score / total) * 100).toFixed(2); // Calculate percentage
            const formattedDate = formatDate(date);
            return `
                <tr>
                    <td>${score} / ${total}</td>
                    <td class="scorePercentage">${percentage}%</td>
                    <td class="scoreDate">${formattedDate}</td>
                </tr>`;
        })
        .join("");
    // Insert the table into the #pastScores element
    const pastScoresElement = document.querySelector("#pastScores");
    pastScoresElement.innerHTML = `
        ${tableHeaders}
        ${tableRows}
    `;
}
/**
 * Formats a date string to the mm/dd/yy format.
 * 
 * @param {string} dateString - The date string to be formatted.
 * The string should be in a valid date format.
 * 
 * @returns {string} - The formatted date string in mm/dd/yy format.
 */
function formatDate(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11, so add 1
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year (yy)
    return `${month}/${day}/${year}`; // Return in mm/dd/yy format
}
/**
 * Renders the past scores in a table format.
 * 
 * @param {Array} pastScores - An array of objects representing past scores.
 * Each object should have properties: score, total, and date.
 * 
 * @returns {void}
 */
function renderScores(pastScores) {
    // Remove existing sections
    removeElementById("quizSection");
    removeElementById("scoreSection");
    removeElementById("pastScoresSection");
    // Create the past scores section dynamically
    createPastScoresSection();
    // Create table headers and rows for the scores
    const tableHeaders = `
        <tr>
            <th>Score</th>
            <th>Percentage</th>
            <th class="scoreDate">Date</th>
        </tr>`;
    const tableRows = pastScores
        .map(({ score, total, date }) => {
            const percentage = ((score / total) * 100).toFixed(2); // Calculate percentage
            const formattedDate = formatDate(date);
            return `
                <tr>
                    <td>${score} / ${total}</td>
                    <td class="scorePercentage">${percentage}%</td>
                    <td class="scoreDate">${formattedDate}</td>
                </tr>`;
        })
        .join("");
    // Insert the table into the #pastScores element
    const pastScoresElement = document.querySelector("#pastScores");
    pastScoresElement.innerHTML = `
        ${tableHeaders}
        ${tableRows}
    `;
}
/**
 * Creates a dialog for confirming the reset of past scores.
 * 
 * @returns {void}
 */
function createDialog() {
    var _a, _b;
    const dialog = document.createElement("dialog");
    dialog.classList.add("nes-dialog", "nes-container", "is-rounded", "is-dark");
    dialog.id = "dialog-dark-rounded";
    dialog.innerHTML = `
        <form method="dialog">
            <p class="title">Confirmation</p>
            <p>Are you sure you want to reset all past scores?</p>
            <menu class="dialog-menu">
                <button class="nes-btn" id="cancel-btn" type="button">Cancel</button>
                <button class="nes-btn is-primary" id="resetConfirm" type="button">Confirm</button>
            </menu>
        </form>
    `;
    displayContainer.appendChild(dialog);
    // Register the dialog with the polyfill if necessary
    if (typeof dialog.showModal !== 'function') {
        dialogPolyfill.registerDialog(dialog);
    }
    // Show the dialog
    dialog.showModal();
    // Add event listener for the Confirm button
    (_a = document.getElementById("resetConfirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const currentUserId = localStorage.getItem("currentUserId");
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem(`quizScores_${currentUserId}`);
        dialog.close(); // Close the dialog
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_b = document.querySelector('#cancel-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById('dialog-dark-rounded'); // Close the dialog
    });
}
/**
 * Resets the quiz variables and returns the user to the beginning of the quiz.
 * 
 * @returns {void}
 */
function returnToBeginning() {
    // Reset quiz variables
    currentQuestion = 0;
    score = 0;
    const currentUserId = localStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    sessionStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score }));
    sessionStorage.setItem("quizProgress", String(0));
    // Update the UI
    removeElementById("scoreSection");
    createActionButtons();
    // Display the first question
    loadQuiz();
}
/**
 * Loads the quiz and initializes the user interface based on the user's login status.
 * 
 * @returns {boolean} - Returns true if the quiz is successfully loaded, false otherwise.
 */
function loadQuiz() {
    const currentUserId = localStorage.getItem("currentUserId");
    if (!currentUserId) {
        // If no user is logged in, show the login section
        createRegisterSection();
        createLoginSection();
        return true;
    }
    // Retrieve users and find the current user
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    const foundUser = users.find((user) => user.id === currentUserId);
    if (!foundUser) {
        console.error("User not found!");
        return false;
    }
    const { firstName } = foundUser;
    // Check if the user has logged in before
    const hasLoggedInBefore = sessionStorage.getItem("hasLoggedInBefore");
    // Display a welcome message based on the user's login history
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        if (hasLoggedInBefore) {
            welcomeMessage.textContent = `Welcome back, ${firstName}!`;
        }
        else {
            welcomeMessage.textContent = `Welcome, ${firstName}!`;
            sessionStorage.setItem("hasLoggedInBefore", "true"); // Mark user as logged in for future
        }
    }
    removeElementById("registerSection");
    removeElementById("loginSection");
    const userProgressKey = `quizScores_${currentUserId}`;
    // sessionStorage.getItem( userProgressKey ) ? createScoresButtons() : createActionButtons();
    if (sessionStorage.getItem(userProgressKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
    if (!document.querySelector("#quizSection")) {
        createQuizSection();
    }
    // Load user progress in the quiz
    loadProgress();
    return true;
}
/**
 * Loads the quiz progress from local storage and updates the current question and score.
 * If no progress is found, initializes the current question and score to 0.
 * 
 * @returns {void}
 */
function loadProgress() {
    // Get the current user ID from local storage
    const currentUserId = localStorage.getItem("currentUserId");

    // Construct the key for the user's progress in local storage
    const userProgressKey = `quizProgress_${currentUserId}`;

    // Retrieve the progress data from local storage
    const progressData = sessionStorage.getItem(userProgressKey);

    // If progress data is found, update the current question and score
    if (progressData) {
        const { currentQuestion: savedQuestion, score: savedScore } = JSON.parse(progressData);
        currentQuestion = savedQuestion;
        score = savedScore;
        console.log(currentQuestion, score);
    }
    // If no progress data is found, initialize the current question and score to 0
    else {
        currentQuestion = 0; // Start from the beginning if no progress is saved
        score = 0;
    }

    // Display the first question in the quiz
    displayQuestion();
}
/**
 * Displays the current question in the quiz.
 * 
 * @returns {void}
 */
function displayQuestion() {
    // Display the action buttons and show the logout button
    const currentQuizData = quizData[currentQuestion];
    console.log(currentQuestion);
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    // Set the question text
    questionEl.textContent = currentQuizData.question;
    // Efficient shuffling using Fisher-Yates
    const shuffledAnswers = shuffle(currentQuizData.answers);
    // If there are more buttons than answers, remove the excess ones
    while (answersEl.children.length > shuffledAnswers.length) {
        answersEl.removeChild(answersEl.lastChild);
    }
    // Add or update buttons
    shuffledAnswers.forEach((answer, index) => {
        let button;
        if (answersEl.children[index]) {
            // Reuse existing button
            button = answersEl.children[index];
        }
        else {
            // Create new button if necessary
            button = document.createElement("button");
            button.classList.add("nes-btn");
            answersEl.appendChild(button);
        }
        // Update the button text
        button.textContent = answer.text;
        // Remove any previous event listeners and add a new one
        const newButton = button.cloneNode(true); // Clean up old event listeners
        button.replaceWith(newButton); // Replace old button with new one
        newButton.addEventListener("click", () => checkAnswer(index));
    });
    // Update the progress bar
    updateProgressBar();
}
/**

 * Updates the progress bar with the current quiz progress.
 * 
 * @returns {void}
 */
function updateProgressBar() {
    const progressBar = document.getElementById("quizProgressBar");
    const progressValue = ((currentQuestion + 1) / totalQuestions) * 100; // Calculate percentage
    progressBar.value = progressValue; // Update the value of the progress bar

    // Save current progress in session storage
    const currentUserId = localStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    sessionStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score })); // Store progress
}
/**
 * Checks the selected answer and updates the score and current question index.
 * Stores progress only at the end of the quiz.
 * 
 * @param {Object} selected - The selected answer object.
 * It should have a property 'correct' indicating whether the answer is correct.
 * 
 * @returns {void}
 */
function checkAnswer(selected) {
    // Increment score if the selected answer is correct
    if (true === selected.correct) {
        score++;
    }
    // Update the current question index
    currentQuestion++;
    // Store progress only at the end of the quiz
    if (currentQuestion < quizData.length) {
        displayQuestion(); // Show the next question
    }
    else {
        showScore(); // Display final score
        if (currentQuestion == quizData.length) {
            currentQuestion = 0;
            score = 0;
        }
        sessionStorage.setItem("quizProgress", String(currentQuestion));
    }
}
/**
 * Shuffles an array using the Fisher-Yates algorithm and a random sort shuffle.
 * 
 * @param {Array} array - The array to be shuffled.
 * 
 * @returns {Array} - The shuffled array.
 */
const shuffle = (array) => {
    // Step 1: Fisher-Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Step 2: Random sort shuffle
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};
/**

 * Displays the final score of the quiz and updates the user's past scores.
 * 
 * @returns {void}
 */
function showScore() {
    removeAllSections();
    // Display the score section
    createScoresButtons();
    createScoreSection();
    // Get the current user ID
    const currentUserId = localStorage.getItem("currentUserId");
    if (!currentUserId) {
        console.error("No current user ID found.");
        return;
    }
    // Retrieve and update past scores for the current user
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(sessionStorage.getItem(userScoresKey) || "[]");
    if (checkProgressAtEnd(currentUserId)) {
        // Add the new score with the current timestamp
        const timestamp = new Date().toLocaleString();
        pastScores.push({ score: score, total: quizData.length, date: timestamp });
        console.log(pastScores);
        // Update localStorage with the new scores
        sessionStorage.setItem(userScoresKey, JSON.stringify(pastScores));
    }
    // Sort the past scores by date (most recent first)
    pastScores.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    // Get the most recent score (which will be the first after sorting)
    const mostRecentScore = pastScores[0];
    // Update the score message with the most recent score
    const scoreMessageEl = document.getElementById("scoreMessage");
    if (scoreMessageEl) {
        scoreMessageEl.textContent = `Most Recent Score: ${mostRecentScore.score} out of ${mostRecentScore.total} on ${mostRecentScore.date}`;
    }
}
/**
 * Checks if the user has reached the end of the quiz based on their progress.
 * 
 * @param {string} currentUserId - The ID of the current user.
 * 
 * @returns {boolean} - Returns true if the user has reached the end of the quiz, false otherwise.
 * The function retrieves the current quiz progress from local storage and checks if the user's current question index
 * is equal to the total number of questions minus one.
 */
function checkProgressAtEnd(currentUserId) {
    // Retrieve current quiz progress
    const quizProgress = sessionStorage.getItem(`quizProgress_${currentUserId}`);
    if (quizProgress && JSON.parse(quizProgress).currentQuestion == totalQuestions - 1) {
        return true;
    }
    return false;
}
// Initial load
window.addEventListener("load", () => {
    loadQuiz();
});
//# sourceMappingURL=index.js.map
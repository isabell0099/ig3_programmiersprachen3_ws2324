

# App svelte 

This Svelte app implements a simple quiz with routing using the `svelte-spa-router`. The app consists of three main components: `Home`, `Quiz`, and `PlayerName`. The routing is defined in the `App.svelte` file using the `Router` component.

## Main-Components

1. **Home (Home.svelte):**
   - Represents the home page of the app.
   - Provides a starting point for users to navigate to the quiz or enter their player name.

2. **Quiz (Quiz.svelte):**
   - Implements the quiz functionality.
   - Displays questions and options, allows users to select answers, and progresses through the quiz.
   - Handles routing for quiz-related pages.


# HOME

This Svelte web app is designed to showcase basic functionality, including fetching data from a JSON file, updating components based on user input, and managing a group filter. The app consists of three main components: `Header`, `Main`, and `Footer`.

## Components

1. **Header (Header.svelte):**
    This Svelte component represents the header section of a web page. It includes a logo, search input field, filter dropdown, social media buttons, and a quiz button.

    Properties and Functions

    value: Two-way binding for the search input field.
    handleGroupFilter: Function to handle group filtering based on the selected option in the dropdown.


   - Manages user input and the group filter.
   - Communicates with the `Main` component to update the displayed data.
   - Uses the `handleGroupFilter` and `handleOnInput` functions to handle group filter changes and user input, respectively.

2. **Main (Main.svelte):**

This Svelte component represents the main content area of a web page where Dinosaur data is displayed. It includes a search functionality and displays a list of Dinosaur cards based on the search query and filter.

Properties

value: Two-way binding for the search input field.
data: All Dinosaur data passed to the component.
filter: A variable used for additional filtering of the Dinosaur data based on groups.

Filtering Logic

The component uses the filterBy function to filter the Dinosaur data based on the search query (value) and an additional filter (group). Ensure that the filterBy function is appropriately defined in your functions.js f


   - Displays the main content of the app.
   - Utilizes the data fetched from the JSON file and updates based on user input and group filtering.

3. **Footer (Footer.svelte):**

   - Represents the footer of the app.
   - May contain additional information or links.

   The `Footer.svelte` component is responsible for rendering the footer of the web app. It consists of three main sections:

    **Sitelinks:**
   - Section containing site-related links.
   - Includes links for "SITELINKS," "Kontakt" (Contact), and "Social Media."

    **Quicklinks:**
   - Section containing quick access links.
   - Includes links for "QUICKLINKS," "Impressum" (Imprint), and "Datenschutz" (Data Protection).

   **Contact Information:**
   - Section providing the contact details for Dinosaurier GmbH.
   - Displays the company address, including an Instagram icon, and phone/fax details.


## Functionality

- **Data Fetching:**
  - The app uses the `fetch` API to load data from the `data.json` file.
  - The fetched data is then passed to the `Main` component for rendering.

- **User Input:**
  - The `Header` component captures user input using the `handleOnInput` function.
  - The input value is then passed to the `Main` component for dynamic content updates.

- **Group Filtering:**
  - The `Header` component manages the group filter, and changes are communicated to the `Main` component via the `handleGroupFilter` function.
  - The `Main` component filters the displayed content based on the selected group.

## Usage

1. Clone the repository: `git clone https://github.com/your-username/svelte-web-app.git`
2. Navigate to the project directory: `cd svelte-web-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5000`

## Project Structure

- **src/components:**
  - Contains Svelte components (`Header.svelte`, `Main.svelte`, `Footer.svelte`) for modular code organization.

- **src/assets:**
  - Holds static assets, such as the `data.json` file.

## Dependencies

- None, as this is a basic Svelte app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


# QUIZ

Usage
Start the quiz by generating your Gamer name with an Open AI and clicking the "Start" button.
Answer each quiz question by selecting the correct dinosaur.
Use the "Skip" button to move to the next question.
Use the "Verlassen" button to go back to the main page. 
At the end of the quiz, you will see a message indicating the quiz is completed.
You can click the "Zurück zur Startseite" button to navigate back to the home page.
Project Structure

src/components: Contains Svelte components used in the application.
src/assets: Includes data files (data.json and quizData.json) used for quiz questions and dinosaur information.
public: Static assets such as images.






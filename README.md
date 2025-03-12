# React + Vite
billy hutchcraft 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


You've arrived at this week's Knowledge Check!  With all of the things you've learned this past week, we are going to create a mini quiz application.  In order to achieve this, we will need a bank of questions with answers to pull from.  That will be provided by the Open Trivia Database API found here:

https://opentdb.com/

Be sure to take a good look at the website above to make sure you know how to use the API, what options exist for it, how the request URLs have to be formatted, and what the format of the returned data looks like.

How you create this app is up to you but there should be at least two separate components that pass props with the following sections:

1. 🏠 Home page - when the app loads it should show a form that contains the following:
Welcome message | Title of the Page | Instructions
    - Figure out a way, that blends with the UI, to give the user instructions so they know exactly what to do
A text box and label for the user's first name
A dropdown and label for the question category - the user must have at least 4 choices that the API supports
A dropdown and label for the question difficulty - use all three choices the API supports
A submit button
An error message, stopping the form submit, if any of these inputs aren't filled out or selected.  They are all required.
NOTE: The input in the text box and dropdowns must be stored in a state object, NOT in three separate state variables  
2. ❓Question Form - When the user submits the form to get the question, another form should appear with the following:
The question - the type will always be multiple choice
The answers as a radio button group with labels - these must be looped through and displayed, not pulled individually 
A submit button
A conditional render that will show a message if the API call encounters an error
An error message, stopping the form submit, if an answer isn't chosen.  
3. ☑️ Results Section - When the user submits their answer, another section should appear with the following:
A message containing the user's name, telling them whether they answered the question wrong or right
A message telling them the correct answer if they answered incorrectly
A button that will allow them to start over and get another question

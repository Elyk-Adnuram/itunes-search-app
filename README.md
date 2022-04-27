The server.js file contains all relevant code and resources for the server.

### Instructions

Make sure Reacts proxy matches the servers port number before starting Express and React.

Once you've followed both React and Express instructions, you should see the application on port 8080.

This application allows the user to use the iTunes API. the application has a simple UI that prompts the user to search for something within the iTunes domain(Music, Movies, Audiobooks etc). Once the user had made the request, the user can decide to add media to a favourites list which will constantly be visible/editable.

### Express:

To run this project, do the following:

1. Copy the directory called 'compulsory_task_21' to your local machine.
2. Navigate to this directory from the command line interface. E.g. cd c:\compulsory_task_21.
3. In the command line interface type 'npm install'
4. Now type 'npm start'. Runs the app in the development mode.
5. GET: When a user makes a request, this simply gets the relevant data sent from the iTunes API.

### React:

Available Scripts:

In the project directory, you can run:

1. (Navigate to React file directory and run npm install(install node modules))

Type npm install in the React file directory within the terminal.

2. (npm start)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

3. (npm test)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### React & Express:

I've built tests for both front-end and back-end.

The React test checks whether a snapshot of the Main component matches the tree variable, this variable stores the same compenent at a given moment.
The test checks to see if the two are a match. If so, the test will pass.

The Express tests check the status code of my get request, which uses the fetch method to extract any data the user has requested from the API.

---

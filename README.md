# Mo's Tap Room

#### By **Nathan Conn**

#### An application to help Mo keep track of drinks, add new drinks, and track sales. 


## Technologies Used

* HTML
* CSS & Bootstrap
* React
* Node.js
* JSON Server

## Description

This is a simple React application to help a user see what beverages are available at Mo's. The list of drinks can be edited and drinks can be added or taken off, and will display sale prices as well.  Finally, the app will be able to track how much of each beverage has sold in a night.

## Setup/Installation Requirements

* Clone repository.
* Run "npm install." in your terminal.
* In the command line, run "npx json-server --watch data/db.json". This will establish a localhost that will run the JSON server. If you wanted to run the server on a different port, you can include "--port ####" to specify which port but then you would need to change the fetch URL to match the same port number.
* Followed by "run npm build."
* Run "npm run start" to view in browser. Since the JSON server will be on port 3000, type "Y" when asked to launch on a different port (likely will be 3001).

## Known Bugs

* Currently the buttons I tried to include to decrement the amount of an individual drink left will not work. 

## Contact Me

Let me know if you run into any issues or have questions, ideas, or concerns:
nconn34@gmail.com

## License

Copyright (c) Nathan Conn 6/5/2022


## Component Diagram
![Tap-Room Diagram](https://user-images.githubusercontent.com/92281134/172069033-6ff7a063-e7d1-4e85-88dd-fb84a4b2d4b8.jpg)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

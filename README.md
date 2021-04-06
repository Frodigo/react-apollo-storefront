# eCommerce React Storefront with React, Apollo and Magentio as a backend.

This is is Proof Of Concept project that is a 'side effect' of 

"Creating an eCommerce storefront from scratch using GraphQL, Apollo, and Magento as a backend" course.

I'm pushing to this repository once a week, and I am sending learning materials to newsletter subscribers of my blog. 

Go to [https://marcin-kwiatkowski.com](https://marcin-kwiatkowski.com) and subscribe to the newsletter if you want 
to receive those materials. 

## Overview
- this project has two main areas:
1. Backend (magento directory) - Magento Instance scaffolded by [https://github.com/markshust/docker-magento](https://github.com/markshust/docker-magento)
2. Frontend (frontend directory) - React App scaffolded by [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

## How to run

### Pre-requirements
- Docker 3.2.2
- Node 14.16
- Yarn 1.22.4

1. Clone this report and go to root directory of it
2. `cd backend`
3. `bin/setup`
4. `cd ../frontend`
5. `yarn install`
6. Once backend setup is finished run `yarn start` (in frontend directory)
7. Done.


## Available Scripts (Frontend)

In the `frontend` directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

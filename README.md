# Wonder - Legal - Micro Frontend

This project is a Micro Frontend build with React SPA and Webpack Module Federation. It is used to build the footer of the application.

This is a simple todo task list project, each task created is a card with title, message and an random image from [Lorem Picsum](https://picsum.photos).

For styling I used [Material UI](https://material-ui.com).

There are some interesting features included like:

+ Authentication
+ Public and private navigation
+ Simple state management

This Micro Frontend was made based on [Wonder Monolith](https://github.com/dancortes-git/wonder-monolith).

The main purpose of this project is to learn more about Micro Frontends using Webpack Module Federation.

The list of all Micro Frontends of the Wonder Wfp Project is:
+ [Wonder WFP Container](https://github.com/dancortes-git/wonder-mfp-container):
  + Container application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).
+ [Wonder WFP Customer](https://github.com/dancortes-git/wonder-mfp-customer):
  + Header of the application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).
+ [Wonder WFP Legal](https://github.com/dancortes-git/wonder-mfp-legal):
  + Footer of the application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).
+ [Wonder WFP Purchase](https://github.com/dancortes-git/wonder-mfp-purchase):
  + Sign In and Sign Up of the application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).
+ [Wonder WFP Marketing](https://github.com/dancortes-git/wonder-mfp-marketing):
  + Landing and Pricing Page of the application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).
+ [Wonder WFP Product](https://github.com/dancortes-git/wonder-mfp-product):
  + The main feature (card todo list) of the application using [Module Federation Plugin](https://webpack.js.org/concepts/module-federation).


This project was deployed in a S3 bucket exposed by cloudfront using github actions (CI/CD).

You can see a live demo at: https://wonder-mfp.dancortes.com

## Micro Frontends Structure

You can see in the picture the local ports and the structure of the project:

![Wonder Structure](https://raw.githubusercontent.com/dancortes-git/wonder-mfp-container/master/images/wonder-structure.jpg)

## Project Wireframes

+ [Wonder Monolith](https://github.com/dancortes-git/wonder-monolith)

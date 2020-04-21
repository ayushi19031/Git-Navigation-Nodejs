# Git-Navigation-Nodejs

## Aim:  
  
This project intends to automate the use of github, through an HTML site. The user enters his/her information in an html form. This information is used to login in github automatically, and then extract information from it.    
  
- Fetch repositories related to a given keyword and display it on the site
- Interactive Guide to contributing to open source
- Filter projecs according to the pull request acceptance rate of the project
- Filter projects based on the user base of the project

## Software used:

- Nodejs  
  * Puppeteer module: To automate the website(Only works with Chrome browsers)  
  * Other modules of nodejs: To build the server
- Mongoose: For filtering and sorting
- HTML, CSS and Javascript: For front design of the page.


## How to run
First install required modules for the project.
```
npm init
npm install express body-parser require puppeteer
```

If you want to use the file multiple times, then use  
```
nodemon index.js
```
else, you can also use  
```
node index.js
```
  
Now, open your web browser and type:

```
localhost:3000
```
Simply enter information in the given form and click "Submit". The console will display your details.

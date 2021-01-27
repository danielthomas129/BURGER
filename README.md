## *** MUNCH A BURGER ***

## DESCRIPTION
a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).
Users can input names of burgers to the app, which will be prepared and ready to eat in one column (a new entry is added to the database). When munched, it is moved to the burger munched area (the entry is modified in the database).

## SCREENSHOTS

The following animation demonstrates the application functionality:

![Database Schema](Assets/Employee-Tracker-MySql-App.gif)
![Database Schema](Assets/ALLEMP.png)
## CLICK THE ICON BELOW: VIDEO DEMO LINK

[![VIDEO LINK]](https://drive.google.com/file/d/1f50F8O-9k8NITC6kPzom6TUnwOE2Ib5k/view)

## INSTALLATION

* ```npm install```
* ```npm install mysql express```
* ```npm install sequelize mysql2```
* ```npm install express-handlebars```
* ```mysql -u root -p```

If choosing to use from terminal, open terminal and run    
```node server.js```   

## DIRECTORY STRUCTURE 
All the recommended files and directories from the steps above should look like the following structure:
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── burger3.png
│   └── seeds.sql
│           
├── .env
├── .gitignore
├── README.md
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

## GitHub Repository & Deployed Site
*GitHub: [@danielthomas129](https://github.com/danielthomas129/BURGER)
*[Github-Repository](https://github.com/danielthomas129/BURGER)
*HEROKU: [DASHBOARD](https://dashboard.heroku.com/apps/burger-much)
*HEROKU: [DEPLOYED-APP](https://burger-much.herokuapp.com/)

- - -

### Daniel Thomas Guadalupe
  
  ## Questions?
  
  ![Developer Profile Picture](https://avatars3.githubusercontent.com/u/74033385?v=4) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@danielthomas129](https://api.github.com/users/danielthomas129)





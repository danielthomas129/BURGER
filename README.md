## *** MUNCH A BURGER ***

## DESCRIPTION
a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).
Users can input names of burgers to the app, which will be prepared and ready to eat in one column (a new entry is added to the database). When munched, it is moved to the burger munched area (the entry is modified in the database).

## SCREENSHOTS

The following animation demonstrates the application functionality:

![Database Schema](public/mab.gif)
![Database Schema](public/mb1.png)

## CLICK THE ICON BELOW: VIDEO DEMO LINK

[![VIDEO LINK]](https://drive.google.com/file/d/1dvua9f7YkLmJ_gH_527-OUlMu561k9M4/view)

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
│   └── mb1.png
│   └── mab.gif
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
[Updated Portfolio](https://danielthomas129.github.io/DTG-Portfolio-2021/)
- - -

### Daniel Thomas Guadalupe
  
  ## Questions?
  
  ![Developer Profile Picture](https://avatars3.githubusercontent.com/u/74033385?v=4) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@danielthomas129](https://api.github.com/users/danielthomas129)





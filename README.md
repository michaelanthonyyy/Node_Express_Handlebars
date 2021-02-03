# Node_Express_Handlebars

## Summary
Eat-Da-Burger is a web application allowing users to input burgers they'd like to "Devour" as well as store each burger in a database using MYSQL. The HTML is generated through the use of Express-Handlebars to easily push the database information dynamically onto the web page.

<br>
<br>

## Example 

![Screenshot](Assets/images/screenshot.png)


<br>
<br>

## Deployed Link
[Deployed Heroku Application]()


## Code Snippet
```javascript
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
```
This code snippet is from the burger.js models that works asynchronously alongside the orm.js file for each orm function including select all, create, update, and delete from the mysql table created. 
<br>
<br>

## Built Using

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [JSON](https://www.json.org/json-en.html)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Express](https://www.npmjs.com/package/express)

<br>
<br>

## Author

**Michael Medina** 
- [Link to Github](https://github.com/michaelanthonyyy)
- [Link to LinkedIn](https://www.linkedin.com/in/michael-medina-22aa70200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B311BosSLTMS4JkhAfkX61A%3D%3D)
- [Link to Portfolio](https://michaelanthonyyy.github.io/portfolio2021/)

<br>
<br>

## LICENSES

Copyright (c) 2021 MIT LICENSE
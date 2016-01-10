# sbernstein

## Installation
`npm install && bower install`
`gem install sass`

## Setup
#### Define your environment
Add `export NODE_ENV=development` (or production) to your environment. 

#### Set up your database
Database configuration details are defined in your environment as well. Add `export DB_USERNAME=username` and `export DB_PASSWORD=password` to your environment. 

## Building
`grunt`

#### Live Building
`grunt development`

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

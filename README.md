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
`gulp`

#### Live Building
`gulp dev`

## Deploying to Heroku

```
$ heroku create APP_NAME
$ heroku config:set NODE_ENV=production
$ heroku config:set DB_USERNAME=YOUR_DB_USERNAME
$ heroku config:set DB_PASSWORD=YOUR_DB_PASSWORD 
$ heroku config:set DB_HOST=YOUR_DB_HOST
$ heroku plugins:install heroku-docker
$ heroku docker:init
$ heroku docker:release
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Build and Deploy with Docker](https://devcenter.heroku.com/articles/docker)

# bungi-api

## Getting Started
1. [Install](https://docs.mongodb.com/manual/administration/install-community) MongoDB community edition.
1. Start the mongodb server: `brew services start mongodb-community`
1. `yarn` && `yarn start`

## Tools
Install the tslint plugin in your editor to get the linting capabilities.

## Env Vars
`MONGODB_URI=mongodb://0.0.0.0:27017/mydb` - Defaults to your localhost mongodb instance. Set only if you need to connect to a remote db.

`BUNGI_API_URL=http://0.0.0.0:1337` - Set to your graphql endpoint's URL to connect to the backend.  Follow the directions in the [UI README section on running the app](https://github.com/Bungi-Developers/bungi-ui#running).

`BUNGI_API_CREATE_SEEDS=true/false` - will recreate the seed data on reload when set to true. NOTE: seed data will be created once when you first connect to a new database, so there is no need to set this unless you need to recreate data constantly.

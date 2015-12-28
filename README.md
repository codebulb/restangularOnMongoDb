# restangularOnMongoDb
An example implementation of a very lightweight tech stack featuring AngularJS, Restangular, RESTHeart and MongoDB for direct access from the UI layer to the backend, without a middle tier.

This is the sample application of this blog post: [AngularJS + MongoDB: Goodbye middle tier?](http://www.codebulb.ch/2015/05/angularjs-mongodb-goodbye-middle-tier-part-1.html)

# Usage instructions
## Install locally
* Clone repository to your local computer
* Install MongoDB 3.1.3 (more recent versions may work as well, but are not tested)
* Install RESTHeart 0.10.2 (more recent versions may work as well, but are not tested)
* `npm install` in the project's main folder to download / install all NPM dependencies
* `bower install` in the project's main folder to download / install all bower dependencies
* Create database / collection: in `mongo` (start `mongod` first):
  * `use restangularOnMongoDb`
  * `db.createCollection("customers")`

## Run locally
* `mongod` to start the MongoDB service on default port 27017
* [Start RESTHeart server](https://softinstigate.atlassian.net/wiki/display/RH/Installation+and+Setup) on default port 8080
* `grunt serve` to run the web application on the static Grunt server
* Open the web application in your browser on URL http://localhost:9000

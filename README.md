##A study of AngularJS boilerplates [![Build Status](https://travis-ci.org/dandaniel/angular-boilerplate-study.svg?branch=master)](https://travis-ci.org/dandaniel/angular-boilerplate-study)

This study attempts to answer a few questions when it comes to AngularJS boilerplates:
  1. Is it worth using a boilerpate? Are the benefits clear enough?
  2. Which applications can benefit more from a boilerplate? (If any)
  3. Can you increase the comprehensibility and performance of an application by using a boilerplate?
  4. What conventions or concepts should be used while setting up a boilerplate?

The result of the study is actually **a boilerplate** itself.


###Installation
--------------------------

To install run

```
$ sudo npm install
$ bower install
```

###Build or compile
--------------------------
A 2-stage grunt strategy is implemeted.

For development, files will go to **./build**.
For production, files will be concatenated, uglyfied / minified and moved to **./application**. (1 css, 1 js)



####Build
--------------------------
The build task will do all the work for development and create files in -> ./build

```
$ grunt build
```
You can use the following command to start the build http server (port 8008 default):

```
$ grunt shell:dev_server
```


####Compile
--------------------------
The compile task will do all the work for production and create files in -> ./application

```
$ grunt compile
```
You can use the following command to start the build http server (port 8008 default):

```
$ grunt shell:prod_server
```


###Testing
--------------------------
To strictly run all tests use:

```
grunt test
```
*Note: this won't build or compile, but just run all unit and end to end tests.*


####Unit
--------------------------
To run unit tests it will come in handy to install karma-cli (if you don't have it yet).
Unit tests will run on PhantomJS, but if you have binaries for other browsers you are encouraged to add them in karma.conf.js

```
$ npm install -g karma-cli
$ grunt test:unit
```

You can use the continous task while writing tests to auto refresh your changes

```
$ grunt karma:continuous
```

Unit tests will run in the grunt default task (which builds first)

```
$ grunt
```

####End to end
--------------------------
Protractor is used for running end to end tests. Before running the tests be sure the webdriver-manager is updated.
Protractor's base url is 'http://localhost:8008/#!', which can be changed in protractor.conf.js - just make sure the application port matches the base url.
The selenium server needs to be running too (default at 'http://localhost:4444/wd/hub'):

```
$ node_modules/protractor/bin/webdriver-manager update
$ node_modules/protractor/bin/webdriver-manager start
$ grunt test:e2e
```

###Mentions
--------------------------
Special thanks to the indulging people at [fadeit.dk](http://fadeit.dk) and to [Niels Henrik Juul Hansen](https://github.com/nielshenrikjuulhansen) for guiding me.


###License
--------------------------
Copyright (c) Dan Mindru <mindrudan@gmail.com>

All rights reserved.


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
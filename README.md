[![Circle CI](https://circleci.com/gh/dandaniel/angular-boilerplate-study/tree/master.svg?style=svg)](https://circleci.com/gh/dandaniel/angular-boilerplate-study/tree/master)

###A study of AngularJS modularity & organization
--------------------------

AngularJS uses modules heavily to declaratively specify how an application should be bootstrapped and how it’s architecture should be designed. Inherently, current boilerplates were built on top of it’s modular structure. Modularity (in theory) can improve a given application in a multitude of areas, such as: **managerial** - development time should be shortened, **application flexibility** - it should be possible to make drastic changes to one module without a need to change the others, **comprehensibility** - it should be possible to study the system one module at a time, **learnability** - the application code should follow industry standards and best practices in order to be easy to setup, learn or extend and **testability** - it should be possible to test the application one module at a time. In some cases, modularity can drastically improve performance by selective, asynchronous or on-demand module loading.


What architecture should an AngularJS boilerplate employ in order to reduce deficiencies in performance, scalability, learnability and comprehensibility?

Can an AngularJS boilerplate be designed to suite the development of applications of multiple sizes (one-size-fits-all)? What criteria can be used to demarcate application sizes?


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



The build task will do all the work for development -> ./build

```
$ grunt build
```

The build task will do all the work for production -> ./application

```
$ grunt compile
```


###Testing
--------------------------
To strictly run all tests run

```
grunt test
```
*Note: this won't build or compile, but just run all unit and end to end tests*


####Unit
--------------------------
To run unit tests it will come in handy to install karma-cli (if you don't have it yet).
Unit tests will run on PhantomJS, but if you have binaries for other browsers you are encouraged to add them in karma.conf.js

```
$ npm install -g karma-cli
$ grunt karma:unit
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
Protractor is used for running end to end tests. Before running the tests be sure the webdriver-manager is updated. The selenium server needs to be running too (default at 'http://localhost:4444/wd/hub'):

```
$ node_modules/protractor/bin/webdriver-manager update
$ node_modules/protractor/bin/webdriver-manager start
$ grunt protractor
```

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
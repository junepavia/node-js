![alt text](https://github.com/junepavia/node-js/blob/master/image.jpg?raw=true)

# NODE JS
tutorials for NODE JS

# Author
June Rodney Pavia


# Version
1.1

# ROADMAP

1. Node JS fundamental
2. File I/O
3. Web Servers
4. ExpressJS
5. Master project
6. Performace and scale
7. Authentication
8. Databases
9. Restful API's
10. Deployment and CI/CD
11. Production + CLOUD
12. GraphQL
13. Web Sockets
14. Dino
15. TypeScript

# Resources
https://academy.zerotomastery.io/courses/1206554/lectures/31844314

# RUNTIME
Javascript Environment

#LIBUV

# WINDOW
alert

# NODE REPL
R-ead
E-val
P-rint
L-oop

parsing 
v8 js engine breakdown js code and understand different parts of it

# Questions?
Process.argv
fileStack
hoisting - https://www.youtube.com/watch?v=AplVrrwY1TI

# Browser VS Node

window == global
document == process
history == module
location == __filename
navigator == require()

WEB API VS NODE API'S

# Node JS fundamentals
1. Internals
A. Javascript Engines - NODE JS API's - NODE JS Bindings
LIBUV + V8
http is one of the function in node js api
asynchronous I/O node is best at

2. Asynchronous
code that doesnt necessarily run line by line
learning things side by side
callback function?

3. blocking vs Non-blocking Input/Output

4. Multi-threading, process and threads
process [code] [thread(callstack)]

event loop?

LibUV handles asynchronous I/O using event loop
two main parts of I/o
a. file system
b. nework

The event loop
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

event loop is a piece of code in LIBUV that processes our asynchronous events/functions and execute the corresponding async callback when the result of function is ready

in node everytime we call a asynchronous function in javascript it gets put on an event loop.

all our javascript code is running on a main thread and any asynchronous functions are put on an event loop and tells your OS to run a asynchronous function ten notifying event loop when the result is ready

in network the os works
in file system operation a thread pool works

pool thread is a set of threads set up ahead of time.

operating system kernel

every callbacks is added to a callback queues to be executed as soon as posible when some async operations completes anad callback queues keeps track of which callback is ready to be executed. First in first out. queue is a waiting area for the callbacks

# phases of event loop
four main phases of event loops
1. timers
a. setTimeout
b. setImmediate
c. set Intervals
2. I/O callbacks
3. set Immediate
4. close callbacks

node in the ecosystem
when is node best at?
node works really well  in input output rather than computations
serving data in heavy i/o
machine learning?
1. Observer Desing pattern
node is event driven
2. The node event emiiter
node built in module like event module

# ASYNCHRONOUS JAVASCRIPT
once our javascript sees an async function the js engine sends it to api to call either web or node api and then the api whatever api it is it will add a callback or a function that we need to invoke to a callback queue then the event loop will check if the call stack is empty
and our entire js file have been read once then it will push the callback or a function to a callstack.

## event loop
is the one who monitor the callstack and event queue
** async ** means we don't have it right now

the web browser or the node on the other hand allows us to use async code so we can interact outsde the javascript.

async function is a function we can execute later

## Promise
A promise is an object that may produce a single value sometime in the future, either a resolve value or a reason why that is not resolve(rejected)

promises are good for asynchronous programming
Fake API for testing and prototyping:

> https://jsonplaceholder.typicode.com/

### Syntax
```
const promise = new Promise(resolve, reject) => {
    resolve();
    reject();
}
promise.then(result => result).then(result => result).catch(error => error);
```

### 3 State of a PROMISE
1. fulfilled
2. rejected
3. pending

To fully grasp promises we must understand what we have before promise and that is **CALLBACK**

**CALLBACKS** 
> When something is done execute this piece of code
callback pyramid of Doom is a nested callbacks



# Nodes Fundamental: Module System

# POSTMAN
> What is POSTMAN ?
```
It is an API client use to develop, test, share and document API.

Step 1: Open Postman webpage - https://www.getpostman.com/

Step 2: Create a free account

Step 3: Activate the account

Step 4: Download and install postman app
```

## REQUIRE FUNCTION
Node allows you to re-use code
Allows you to take javascript file, executes it and returns a code from that file so that we can use it elsewhere.
> Syntax
```
require('http'), require('events');
const EventEmitter = require('events);
```
Lets you use node built-in functionalities.

### MAKING HTTP REQUEST
> REQUEST and GET are similar but the REQUEST function need to have req.end() function to execute
> NODE MODULES 
```
1. lets you re-use existing code.
2. Organize your code.
3. Expose Only what will be used.
```

### CREATING OUR OWN MODULES
Exporting modules by calling
> modue.exports = { moduleName: moduleRename };
Importing modules by calling
> const fileName = require('./fileName);
```
file extension is optional since node search for it as js, json, node extensions.
Note that it is relative path
```


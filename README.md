# parse-spawn-args-ng

💡 This module is based 100% on [parse-spawn-args](https://github.com/mingqi/parse-spawn-args).


If you need to spawn child process in Node.js, and need to parse a string command to a list arguments that pass to child process,  this module will be helpful. Here is examples:

## usage

### parse args with quote around
```
var parse = require('parse-spawn-args').parse
parse('-port 80 --title "this is a title"')
/*
    [
        '-port',
        '80',
        '--title',
        'this is a title'
    ]
/*
```

### parse args with quote escape
```
var parse = require('parse-spawn-args').parse
parse('-port 80 --title "this is a \\"title\\"')
/*
    [
        '-port',
        '80',
        '--title',
        'this is a "title"'
    ]
*/
```


## new features

- updated to latest [pegjs](https://github.com/pegjs/pegjs) version
- fixed undeclared variables [issue](https://github.com/mingqi/parse-spawn-args/pull/1) on generated code with strict mode
- types added
- bundle to esm + cjs using esbuild
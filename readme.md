# Elegant-Logs
Helps to create beautiful looking logs.

# Setup
if you have npm installed run 'npm install --save elegant-logs'
```
var logs = require('elegant-logs');

logs.log('test', '|Elegant |', 'blue', 'bgred');

logs.cmd('test', 'bgred', 'blue');

logs.status('test', 'bggreen', 'green');

logs.boot('test', 'red', 'green');

logs.success('test', 'red', 'blue');

logs.error('test', 'purple', 'bgpurple');

logs.critical('test', 'bgpurple', 'yellow');

```

#types
elegant-logs comes with many default types of logs.

these include,

- [x] success 

- [x] critical 

- [x] cmd 

- [x] status  

- [x] boot 

- [x] error 

- [x] log 

```~see below for colors~```

#log
log - lets you take control of every element of your log.

``` logs.log('test', 'logname', 'lognamecolor', 'textcolor'); ```

###Example:

``` logs.log('test', '|Elegant |', 'bgyellow', 'red');``` 



#Colors & Effects
``` Note: You may only use 1 color or effect for each 'color slot' ```

### Effects
Reset

Bright 

Dim 

Underscore - no longer supported as of ```1.2.9```

Blink

Reverse 

Hidden



### Text color

black

red 

green 

yellow 

blue 

purple 

cyan 

white

### Background color


bgwhite 

bgblack 

bgred 

bggreen

bgyellow

bgblue

bgpurple

bgcyan 

#changelog

### 1.3.4
```Techno Cleaned / shortened code```

###1.2.9
Underscore no longer supported.


###1.2.8
```MAJOR:```

Fixed custom log having incorrect effects.

###1.2.8
fixed status being out of place

###1.2.7
minor status color mixup

###1.2.6
Fixed ```big``` log color bug,

minor/major bugs,

small updates from here on out

###1.2.5
No longer breaks terminal if effects are used incorrectly,

minor bugs

###1.2.4
```should``` fix errors with effects

###1.2.3
Effect functionality,

minor bug fixes

###1.2.2
```should``` error of not logging if no color2 is chosen,

minor bug fixes

###1.2.1
Complete overhaul of logging system,

multi-color functionality

#Plog
``` Gone as of build 1.1.0...```

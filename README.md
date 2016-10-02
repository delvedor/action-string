# callback-string
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/delvedor/callback-string.svg?branch=master)](https://travis-ci.org/delvedor/callback-string)

`callback-string` can be useful if you are using a command pattern approach or RPC or simply when you need to save a callback to call later (see Facebook Messenger postback).
`callback-string` has only two method, *parse* and *stringify*, the first transforms a callback object to the respective string, the second viceversa.

Example:
```javascript
const parse = require('callback-string/Parse')
const stringify = require('callback-string/Stringify')

const obj = {
  callback: 'getData',
  parameters: {
    from: '10/02/2002',
    to: '11/03/2008'
  }
}

const str = stringify(obj).result
console.log(str) // getData#from=10/02/2002#to=11/03/2008

const objParsed = parse(obj)
console.log(objParsed)
```
As you can see it expects that the object to stringify is formatted in this way:
```javascript
const obj = {
  callback: 'actionName', // string
  parameters: {         // object
    par1: 'par1',       // any type
    par2: 2             // any type
  }
}

const str = 'actionName#par1=par1#par2=2'
```

## Install
```
npm install callback-string --save
```

## Usage
#### parse(callbackString, escape)
`callbackString` must be a *string*  
`escape` must be a *string*, default to `'#'`  
Returns an *object* formatted as described above.

#### stringify(callbackObject, escape)
`callbackObject` must be an *object* as described above  
`escape` must be a *string*, default to `'#'`  
Returns a *string* formatted as described above.

## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/action-string/blob/master/LICENSE)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2016 Tomas Della Vedova

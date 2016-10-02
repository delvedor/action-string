'use strict'

function Stringify (callbackObject, escape) {
  if (!(this instanceof Stringify)) {
    return new Stringify(callbackObject, escape)
  }
  escape = escape || '#'
  if (typeof callbackObject !== 'object' || typeof escape !== 'string') {
    throw new TypeError('callbackObject should be an object and  escape a string')
  }
  this.result = `${callbackObject.callback}${escape}`
  const keys = Object.keys(callbackObject.parameters)
  for (let i = 0, len = keys.length; i < len; i++) {
    this.result += `${keys[i]}=${JSON.stringify(callbackObject.parameters[keys[i]])}`
    if (i !== len - 1) this.result += escape
  }
}

module.exports = Stringify

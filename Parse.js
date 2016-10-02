'use strict'

function Parse (callbackString, escape) {
  if (!(this instanceof Parse)) {
    return new Parse(callbackString, escape)
  }
  escape = escape || '#'
  if (typeof callbackString !== 'string' || typeof escape !== 'string') {
    throw new TypeError('callbackString and escape should be strings')
  }
  callbackString = callbackString.split(escape)
  this.callback = callbackString[0]
  this.parameters = {}
  for (let i = 1; i < callbackString.length; i++) {
    callbackString[i] = callbackString[i].split('=')
    this.parameters[callbackString[i][0]] = JSON.parse(callbackString[i][1])
  }
}

module.exports = Parse

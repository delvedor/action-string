'use strict'

function Parse (actionString, escape) {
  if (!(this instanceof Parse)) {
    return new Parse(actionString, escape)
  }
  escape = escape || '#'
  if (typeof actionString !== 'string' || typeof escape !== 'string') {
    throw new TypeError('action and escape should be strings')
  }
  actionString = actionString.split(escape)
  this.action = actionString[0]
  this.parameters = {}
  for (let i = 1; i < actionString.length; i++) {
    actionString[i] = actionString[i].split('=')
    this.parameters[actionString[i][0]] = JSON.parse(actionString[i][1])
  }
}

module.exports = Parse

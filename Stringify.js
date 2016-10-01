'use strict'

function Stringify (actionObject, escape) {
  if (!(this instanceof Stringify)) {
    return new Stringify(actionObject, escape)
  }
  escape = escape || '#'
  if (typeof actionObject !== 'object' || typeof escape !== 'string') {
    throw new TypeError('Action should be an object and  escape a string')
  }
  this.result = `${actionObject.action}${escape}`
  const keys = Object.keys(actionObject.parameters)
  for (let i = 0, len = keys.length; i < len; i++) {
    this.result += `${keys[i]}=${JSON.stringify(actionObject.parameters[keys[i]])}`
    if (i !== len - 1) this.result += escape
  }
}

module.exports = Stringify

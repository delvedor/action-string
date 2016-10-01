'use strict'

const tap = require('tap')
const test = tap.test
const parse = require('./Parse')
const stringify = require('./Stringify')

test('.stringify', t => {
  t.plan(2)
  const obj = {
    action: 'getData',
    parameters: {
      from: '10/02/2002',
      to: '11/03/2008'
    }
  }
  t.is(typeof stringify(obj).result, 'string')
  t.equal(stringify(obj).result, 'getData#from="10/02/2002"#to="11/03/2008"')
})

test('.parse', t => {
  t.plan(2)
  const str = 'getData#from="10/02/2002"#to="11/03/2008"'
  t.is(typeof parse(str), 'object')
  t.deepEqual(parse(str), { action: 'getData', parameters: { from: '10/02/2002', to: '11/03/2008' } })
})

test('.stringify and .parse', t => {
  t.plan(2)
  const obj = {
    action: 'getData',
    parameters: {
      from: '10/02/2002',
      to: '11/03/2008'
    }
  }
  const str = 'getData#from="10/02/2002"#to="11/03/2008"'
  const parsedStr = stringify(obj).result
  const strObj = parse(str)

  t.deepEqual(obj, parse(parsedStr))
  t.equal(str, stringify(strObj).result)
})

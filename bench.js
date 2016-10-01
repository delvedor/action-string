'use strict'

const Benchmark = require('benchmark')
const suite = Benchmark.Suite()

const parse = require('./Parse')
const stringify = require('./Stringify')

const str = 'open-data#from=1#to=10'
const obj = {
  action: 'open-data',
  parameters: {
    from: 1,
    to: 10
  }
}

suite
  .add('parse', function () {
    parse(str)
  })
  .add('stringify', function () {
    stringify(obj)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {})
  .run()

/*
bench without flatstr and fast-json-parse
parse x 1,981,784 ops/sec ±0.94% (90 runs sampled)
stringify x 1,651,244 ops/sec ±1.65% (87 runs sampled)
*/

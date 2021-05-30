const { Suite } = require('benchmark');
const oldSortedIndex = require('../oldSortedIndex')
const newSortedIndex = require('../newSortedIndex')

const MAX_COUNT = 100000
const searchTarget = 10
const example = new Array(MAX_COUNT).fill(searchTarget)
const newSorted = new Suite()

newSorted.add('oldSortedIndex', () => oldSortedIndex(example, searchTarget))
.add('newSortedIndex', () => newSortedIndex(example, searchTarget))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });



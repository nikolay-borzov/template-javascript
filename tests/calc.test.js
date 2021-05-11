import test from 'ava'
import { complexCalculations } from '../src/calc.js'

test('complexCalculations » should add two numbers', (t) => {
  const expected = 7

  const actual = complexCalculations(3, 4)

  t.is(actual, expected)
})

test('complexCalculations » should return 0 if result is not a number', (t) => {
  const expected = 0

  const actual = complexCalculations(3, '😫')

  t.is(actual, expected)
})

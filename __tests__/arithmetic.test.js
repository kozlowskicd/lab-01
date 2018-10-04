'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');
faker.seed(1);
const firstRandNum = faker.random.number();
faker.seed(2);
const secondRandNum = faker.random.number();

describe('Arithmetic Tests', () => {
  it('can add two numbers', () => {
    let sum = arithmetic.add(firstRandNum,secondRandNum);
    expect(sum).toEqual(firstRandNum + secondRandNum);
  });
  it('can subtract two numbers', () => {
    let diff = arithmetic.subtract(firstRandNum,secondRandNum);
    expect(diff).toEqual(firstRandNum - secondRandNum);
  });
  it('adding non-numbers returns null', () => {
    let sum = arithmetic.add(firstRandNum,'string');
    expect(sum).toBeNull();
  });
  it('subtracting non-numbers returns null', () => {
    let diff = arithmetic.subtract(true,secondRandNum);
    expect(diff).toBeNull();
  });
});
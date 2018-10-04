'use strict';
const greet = require('../lib/greet.js');
const faker = require('faker');

describe('Greeter Tests', () => {
  it('non-strings return null', () => {
    let greeting = greet(100);
    expect(greeting).toBeNull();
  });
  it('inputting string returns string', () => {
    let randString = faker.random.word();
    let greeting = greet(randString);
    expect(typeof greeting).toEqual('string');
  });
  it('outputs `hello world` when input with `world`', () => {
    let greeting = greet('world');
    expect(greeting).toEqual('hello world');
  });
});
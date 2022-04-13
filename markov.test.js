"use strict"

const MarkovMachine = require("./markov.js");

describe("MarkovMachine", function () {
  // will hold the input string for the test
  let inputWords;
  let chain;

  beforeEach(function () {
    inputWords = "The cat in the hat.";
    chain = {
              "The": ["cat"],
              "cat": ["in"],
              "in": ["the"],
              "the": ["hat."],
              "hat.": [null]
            };
  });

  test("MarkovMachine.getChains returns chain", function () {
    const words = new MarkovMachine(inputWords);
    expect(words.getChains()).toEqual(chain);
    expect(words.getChains()).not.toEqual({"chain":["the"]});
  });

  test("MarkovMachine.getText works if input is one word", function () {
    inputWords = "test"
    const words = new MarkovMachine(inputWords);
    expect(words.getText()).toEqual(inputWords);
    expect(words.getText()).not.toEqual("cat");
  });

  test("MarkovMachine.getText works if input is an empty string", function () {
    inputWords = ""
    const words = new MarkovMachine(inputWords);
    expect(words.getText()).toEqual("");
    expect(words.getText()).not.toEqual("cat");
  });
});
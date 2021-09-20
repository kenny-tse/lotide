const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns length 2 when passing array of length 3", () => {
    assert.equal(tail(["a", "b", "c"]).length, 2);
  });

  it("returns [Lighthouse, Labs] when passing [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [Lighthouse] as the first element when passing [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it("returns [Labs] as the second element when passing [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });

});



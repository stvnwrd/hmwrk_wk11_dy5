var assert = require("assert");
var Record = require("../record");

describe("Record", function(){

  var record

  beforeEach(function(){
    record1 = new Record({artist: "Lanark Artefax", title: "Whities 011", genre: "Electronic", price: 10});
  });

  it("should have an artist", function(){
    assert.strictEqual(record1.artist, "Lanark Artefax")
  });

  it("should have a title", function(){
    assert.strictEqual(record1.title, "Whities 011")
  });

  it("should have a genre", function(){
    assert.strictEqual(record1.genre, "Electronic")
  });

  it("should have a price", function(){
    assert.strictEqual(record1.price, 10)
  });

  it("should be possible to print out the record properties as a string", function(){
    assert.strictEqual(record1.printProperties(), "Lanark Artefax - Whities 011 - Electronic - £10");
  });

  it





})

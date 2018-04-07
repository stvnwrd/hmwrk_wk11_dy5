var assert = require("assert");
var Store = require("../store");
var Record = require("../record");

describe("Store", function(){

  var record1
  var record2
  var record3
  var store

  beforeEach(function(){
    record1 = new Record({artist: "Lanark Artefax", title: "Whities 011", genre: "Electronic", price: 10});
    record2 = new Record({artist: "Wire", title: "Chairs Missing", genre: "Post Punk", price: 15});
    record3 = new Record({artist: "Avalon Emerson", title: "Whities 013", genre: "Electronic", price: 10});
    store1 = new Store({name: "Smashing Records", city: "Glasgow"});
    store2 = new Store({name: "The Vinyl Countdown", city: "Paisley", inventory: [record1, record2], balance: 500});
  });

  it("should have a name", function(){
    assert.strictEqual(store1.name, "Smashing Records")
  });

  it("should have a city", function(){
    assert.strictEqual(store1.city, "Glasgow")
  });

  it("should have an inventory which defaults to an empty array", function(){
    assert.deepStrictEqual(store1.inventory, [])
  });

  it("should be able to take in an inventory via the constructor", function(){
    assert.deepStrictEqual(store2.inventory, [record1, record2])
  });

  it("should have a balance which defaults to 0", function(){
    assert.strictEqual(store1.balance, 0)
  });

  it("should able to take in a balance via the constructor", function(){
    assert.strictEqual(store2.balance, 500)
  });

  it("should be possible to add a record to the inventory", function(){
    store1.addRecord(record1);
    assert.deepStrictEqual(store1.inventory, [record1])
  });

  it("should be possible to add some records to the inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    assert.deepStrictEqual(store1.inventory, [record1, record2, record3])
  });

  

})

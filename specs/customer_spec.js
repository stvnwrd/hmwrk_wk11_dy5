var assert = require('assert');
var Customer = require('../customer');
var Record = require('../record')

describe('Customer', function(){

  var record1
  var record2
  var record3
  var record4
  var customer1

  beforeEach(function(){
    record1 = new Record({artist: "Lanark Artefax", title: "Whities 011", genre: "Electronic", price: 10});
    record2 = new Record({artist: "Wire", title: "Chairs Missing", genre: "Post Punk", price: 15});
    record3 = new Record({artist: "Avalon Emerson", title: "Whities 013", genre: "Electronic", price: 10});
    record4 = new Record({artist: "Alice Coltrane", title:"Ptah, The El Daoud", genre: "Jazz", price: 25});
    customer1 = new Customer({name: "Hector", collection: [record1, record2], money: 20});
    customer2 = new Customer({name: "Dinah"});
  });

  it('should have a name', function(){
    assert.strictEqual(customer1.name, "Hector");
  });

  it('should have a collection', function(){
    assert.deepStrictEqual(customer1.collection, [record1, record2]);
  })

  it('should have a default collection of []', function(){
    assert.deepStrictEqual(customer2.collection, []);
  });

  it('should have money', function(){
    assert.strictEqual(customer1.money, 20);
  });

  it('should have default money of 0', function(){
    assert.strictEqual(customer2.money, 0);
  });

  it('should be possible to remove record from collection', function(){
    customer1.removeRecord(record1);
    assert.deepStrictEqual(customer1.collection, [record2])
  });

  it('it should be possible to increase the customer money by the price of a sold record', function(){
    customer1.increaseBalanceByRecordPrice(record1);
    assert.strictEqual(customer1.money, 30);
  });

  it('should be possible to sell a record, amending collection and money', function(){
    customer1.sellRecord(record1);
    assert.deepStrictEqual(customer1.collection, [record2]);
    assert.strictEqual(customer1.money, 30);
  });

  it('should be possible to add record to collection', function(){
    customer1.addRecord(record3);
    assert.deepStrictEqual(customer1.collection, [record1, record2, record3]);
  });

  it('should be possible to decrease money by value of record price', function(){
    customer1.decreaseBalanceByRecordPrice(record3);
    assert.strictEqual(customer1.money, 10);
  });

  it('should be possible to buy a record, amending collection and money', function(){
    customer1.buyRecord(record3);
    assert.deepStrictEqual(customer1.collection, [record1, record2, record3]);
    assert.strictEqual(customer1.money, 10);
  });

});

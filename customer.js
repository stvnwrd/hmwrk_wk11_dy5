var _ = require('lodash');

var Customer = function(params){
  this.name = params.name;
  this.collection = params.collection || [];
  this.money = params.money || 0;
};

Customer.prototype.removeRecord = function (record) {
  _.remove(this.collection, record);
};

Customer.prototype.increaseBalanceByRecordPrice = function (record) {
  this.money += record.price;
};

Customer.prototype.sellRecord = function (record) {
  this.increaseBalanceByRecordPrice(record);
  this.removeRecord(record);
};


Customer.prototype.addRecord = function (record) {
    this.collection.push(record);
};

Customer.prototype.decreaseBalanceByRecordPrice = function (record) {
  this.money -= record.price;
};

Customer.prototype.buyRecord = function (record) {
  if (this.money >= record.price){
    this.decreaseBalanceByRecordPrice(record);
    this.addRecord(record);
  } else {
    this.insufficientFunds(this.name, record.price);
  }
};

Customer.prototype.insufficientFunds = function (name, title) {
  return `Sorry ${name}, you have insufficient funds to buy ${title}.`
};

Customer.prototype.collectionValue = function () {
  return _.sumBy(this.collection, 'price');
};


Customer.prototype.collectionValueByGenre = function (genre) {
  var filtered = _.filter(this.collection, {genre: genre});
  return _.sumBy(filtered, 'price');
};

Customer.prototype.mostValuableRecord = function () {
  var firstFoundHighest = _.maxBy(this.collection, 'price');
  return _.filter(this.collection, {'price': firstFoundHighest.price});
};

Customer.prototype.sortRecordsByValueAscending = function () {
  return _.orderBy(this.collection, ['price', 'artist'], ['asc', 'asc'])
};

Customer.prototype.sortRecordsByValueDescending = function () {
  return _.orderBy(this.collection, ['price', 'artist'], ['desc', 'asc']);
};

Customer.prototype.compareCollectionValues = function (challenger) {
  if (this.collectionValue() > challenger.collectionValue()){
    return this;
  } else if (challenger.collectionValue() > this.collectionValue()){
    return challenger;
  } else {
    return "Everyone is a loser in this situation, folks."
  }
};

module.exports = Customer;

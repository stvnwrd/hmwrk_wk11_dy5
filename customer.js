var _ = require('lodash');

var Customer = function(params){
  this.name = params.name;
  this.collection = params.collection || [];
  this.money = params.money || 0;
}

Customer.prototype.removeRecord = function (record) {
  for(i in this.collection){
    if(this.collection[i]==record) {
      this.collection.splice(i,1);
      break;
    }
  }
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
  return _.maxBy(this.collection, 'price');
};

module.exports = Customer;

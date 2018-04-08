var _ = require("lodash")

var Store = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.inventory = params.inventory || [];
  this.balance = params.balance || 0;
};

Store.prototype.addRecord = function (record) {
    this.inventory.push(record);
};

Store.prototype.listInventory = function () {
  return this.inventory;
};

Store.prototype.inventoryTotalStock = function () {
  return this.inventory.length;
};

Store.prototype.removeRecord = function (record) {
  // Line below remove all occurences of a record
  // return _.remove(this.inventory, record);

  for(i in this.inventory){
    if(this.inventory[i]==record) {
      this.inventory.splice(i,1);
      break;
    }
  }
};

Store.prototype.increaseBalanceByRecordPrice = function (record) {
  this.balance += record.price;
};

Store.prototype.sellRecord = function (record) {
  this.increaseBalanceByRecordPrice(record);
  this.removeRecord(record);
};

Store.prototype.inventoryTotalValue = function () {
  return _.sumBy(this.inventory, 'price');
};

Store.prototype.financialSituation = function () {
  return `Balance: £${this.balance} - Stock Value: £${this.inventoryTotalValue()}`
};

Store.prototype.filteredGenre = function (genre) {
  return _.filter(this.inventory, {'genre': genre})
};


module.exports = Store;

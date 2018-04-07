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
  this.decreaseBalanceByRecordPrice(record);
  this.addRecord(record);
};

module.exports = Customer;

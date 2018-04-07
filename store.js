var Store = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.inventory = params.inventory || [];
  this.balance = params.balance || 0;
};

Store.prototype.addRecord = function (record) {
    this.inventory.push(record);
};

module.exports = Store;

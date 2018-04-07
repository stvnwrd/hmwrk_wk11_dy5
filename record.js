var Record = function(params){
  this.artist = params.artist;
  this.title = params.title;
  this.genre = params.genre;
  this.price = params.price;
};

Record.prototype.printProperties = function() {
  return `${this.artist} - ${this.title} - ${this.genre} - £${this.price}`;
};





module.exports = Record;

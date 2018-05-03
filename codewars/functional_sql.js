function Query() {
  this.collections = {};
}

Query.prototype.from = function(...collections) {
  // Returns a function that will get called by execute()
  // Receives any number of arrays, loads them as collections
  this.collections = collections.map(collection => {
    console.log('collection: ', collection);
  });
};

Query.prototype.groupBy = function(...groupingFunctions) {
  // Divides the db into array
  // groupingFunctions is an array of functions that each take 1 argument:Any and return a label:String
  // for each fn in groupingFunctions array:
    // Apply fn to each item in this.db
    // Return: 
      // An array of 2-item arrays:
        // First item is label returned by fn
        // Second item:
          // Is an array of all items for which fn returned that label
    // If there are more grouping functions:
      // Apply next fn to each item in each group[1]

  // this.groups = array of results of calling each grouping function as above, starting with this.db.

};

Query.prototype.orderBy = function() {};

Query.prototype.where = function() {
// Allowed to be called more than once    
};

Query.prototype.having = function() {
// Allowed to be called more than once    
};

Query.prototype.select = function() {
// Receives a function to be called with the values of the array
};

Query.prototype.execute = function() {
  // Execute all methods on the query in this order:
    // .from()
    // .groupBy()
    // .orderBy()
    // .where()
    // .having()
    // .select()
};


var query = function() {
  const obj = {};
  obj.collections = [];
  

  return obj;
};



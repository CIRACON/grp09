// mongodb client driver
const { MongoClient } = require('mongodb');

// DB Connection URL
var url = "mongodb://localhost:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "employeeList";
const collectionName = "employees"

module.exports.call = async function call(operation, parameters, callback) {
  // connect to the db server
  await client.connect();

  // set the database to use
  const db = client.db(dbName);
  // set the collection to use
  const collection = db.collection(collectionName);

    //Execute Operations
    switch (operation.toLowerCase()) {
      case 'findallemployees':
        const employees = await collection.find({}).toArray();
        callback({ employees: employees });
        break;
  }
  console.log( 'call complete: ' + operation );
  client.close();
  return 'call complete';
}

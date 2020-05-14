const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `http://localhost:3000/`;

const runWithDatabase = async (runWhileConnected) => {
  console.log('connecting to database...\n');
  await mongoose.connect(databaseUrl, options);

  console.log('dropping old data...\n');
  await mongoose.connection.db.dropDatabase();

  console.log('running function...\n');
  await runWhileConnected();

  console.log('\n');

  console.log('disconnecting from database...\n');
  await mongoose.disconnect();
  console.log('complete!\n');
};

module.exports = {
  mongoose,
  runWithDatabase,
};
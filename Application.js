const { db } = require('./server/database');
const app = require('./server');
const PORT = 43594;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
  });

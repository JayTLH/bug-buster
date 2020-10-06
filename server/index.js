const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/database'); // database
const PORT = process.env.PORT || 8080;

// test db
db.authenticate()
  .then(() => {
    console.log('db connected')

    const Users = require('./models/Users');
    const Projects = require('./models/Projects');
    const seed = async () => {
      Users.hasMany(Projects, { as: 'Projects', foreignKey: 'ownerId' });
      Projects.belongsTo(Users, { as: 'Users', foreignKey: 'ownerid' });
    
      const find = await Users.findAll({
        where: { name: 'Demo User' }
      });
    
      console.log('result => ', find)
    };
    seed()

  })
  .catch((err) => console.log('error => ', err))

// routes
app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log('server running on port ', PORT);
});

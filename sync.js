console.log('🔄 Starting sync...');

const { sequelize, Rule, Variable } = require('./models');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Tables created successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error syncing tables:', err);
  });

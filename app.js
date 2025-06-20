// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const ruleRoutes = require('./routes/rules');
const variableRoutes = require('./routes/variables');
const evaluationRoutes = require('./routes/evaluation');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/rules', ruleRoutes);
app.use('/api/v1/variables', variableRoutes);
app.use('/api/v1/evaluation', evaluationRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection error:', err));
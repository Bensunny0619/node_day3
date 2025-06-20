const { Variable } = require('../models');

exports.getAll = async (req, res) => {
  const variables = await Variable.findAll();
  res.json(variables);
};

exports.getOne = async (req, res) => {
  const variable = await Variable.findByPk(req.params.id);
  if (!variable) return res.status(404).json({ error: 'Not found' });
  res.json(variable);
};

exports.create = async (req, res) => {
  const newVariable = await Variable.create(req.body);
  res.status(201).json(newVariable);
};

exports.update = async (req, res) => {
  const variable = await Variable.findByPk(req.params.id);
  if (!variable) return res.status(404).json({ error: 'Not found' });
  await variable.update(req.body);
  res.json(variable);
};

exports.remove = async (req, res) => {
  const variable = await Variable.findByPk(req.params.id);
  if (!variable) return res.status(404).json({ error: 'Not found' });
  await variable.destroy();
  res.json({ message: 'Deleted' });
};

const { Rule } = require('../models');

exports.getAll = async (req, res) => {
  const rules = await Rule.findAll();
  res.json(rules);
};

exports.getOne = async (req, res) => {
  const rule = await Rule.findByPk(req.params.id);
  if (!rule) return res.status(404).json({ error: 'Rule not found' });
  res.json(rule);
};

exports.create = async (req, res) => {
  const newRule = await Rule.create(req.body);
  res.status(201).json(newRule);
};

exports.update = async (req, res) => {
  const rule = await Rule.findByPk(req.params.id);
  if (!rule) return res.status(404).json({ error: 'Rule not found' });
  await rule.update(req.body);
  res.json(rule);
};

exports.remove = async (req, res) => {
  const rule = await Rule.findByPk(req.params.id);
  if (!rule) return res.status(404).json({ error: 'Rule not found' });
  await rule.destroy();
  res.json({ message: 'Deleted' });
};

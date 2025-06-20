const { Rule, Variable } = require('../models');

exports.evaluate = async (req, res) => {
  try {
    const base64 = req.query.variable;
    const jsonStr = Buffer.from(base64, 'base64').toString('utf8');
    const payload = JSON.parse(jsonStr);

    const dbVariables = await Variable.findAll();
    const variableTypes = {};
    dbVariables.forEach(v => {
      variableTypes[v.name] = v.type;
    });

    // Cast variables to correct types
    const casted = {};
    for (let key in payload) {
      if (!variableTypes[key]) continue; // ignore if not in DB
      let value = payload[key];
      if (variableTypes[key] === 'FLOAT') value = parseFloat(value);
      if (variableTypes[key] === 'INTEGER') value = parseInt(value);
      casted[key] = value;
    }

    const rules = await Rule.findAll();
    const results = [];

    for (let rule of rules) {
      try {
        const fn = new Function(...Object.keys(casted), `return ${rule.condition}`);
        const isValid = fn(...Object.values(casted));
        if (isValid) {
          results.push({ rule_id: rule.id, result: rule.action });
        }
      } catch (e) {
        continue; // skip invalid rule
      }
    }

    res.json(results);
  } catch (err) {
    res.status(400).json({ error: 'Invalid payload or base64' });
  }
};

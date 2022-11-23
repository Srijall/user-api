const Joi = require("joi");

const create = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().optional(),
  uid: Joi.number().required().greater(0).positive(),
});
const edit = Joi.object({
  title: Joi.string().min(3).max(50).optional(),
  description: Joi.string().optional(),
});

const checkParams = Joi.object({
  id: Joi.number().required().greater(0).positive(),
});

const blogSchema = {
  create,
  checkParams,
  edit
};

module.exports = blogSchema;

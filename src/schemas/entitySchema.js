import Joi from "@hapi/joi";

const entitySchema = Joi.object().keys({
  id: Joi.number().required(),
  message: Joi.string()
    .required(),
});

export default entitySchema;

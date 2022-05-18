const { check } = require('express-validator');
const { validate } = require('../util/validateHelper');

const projectDoesNotExits=require("./projectDoesNotExists")
const validateCreate = [
    check('name','name is required').notEmpty(),
    projectDoesNotExits,
    check('projectmanajer_id','You have to choose a Project Manajer').isNumeric(),
    check('firstUserAssigned_id','You have to choose at least a user').isNumeric(),
    (req, res, next) => validate(req, res, next)
]

const validateUpdate = [
    check('name','name is required').notEmpty(),
    check('description','description should be a text').isString(),
    check('projectmanajer_id','You have to choose a Project Manajer').isNumeric(),
    check('firstUserAssigned_id','You have to choose at least a user').isNumeric(),
    (req, res, next) => validate(req, res, next)
]

module.exports = { validateCreate, validateUpdate };
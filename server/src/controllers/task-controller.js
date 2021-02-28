'use strict';

const Task = require('../models/Task');
const CustomError = require('../utils/CustomError');
const s = require('http-status');

async function create(req, res) {
  const { title, description } = req.body;

  const task = await Task
    .query()
    .insert({
      title,
      authorID: req.user.id,
      description,
    });

  return res.send(task);
}

async function getByID(req, res) {
  const { id } = req.params;

  const [task] = await Task
    .query()
    .where({ id })
    .withGraphFetched('[author]');

  if(!task || !task.id) {
    throw new CustomError('Task with this ID does not exist', s.NOT_FOUND);
  }

  return res.send(task);
}

async function update(req, res) {
  const { id } = req.params;
  const { description, title, status } = req.body;
  const { id: authorID } = req.user;

  const [taskByIdAndAuthor] = await Task
    .query()
    .where({
      id,
      authorID,
    })

  if (!taskByIdAndAuthor || !taskByIdAndAuthor.id) {
    throw new CustomError('You have no permissions to edit this task', s.FORBIDDEN);
  }

  const task = await Task
    .query()
    .patchAndFetchById(id, { description, title, status  });

  if (!task || !task.id) {
    throw new CustomError('Task with this ID does not exist', s.NOT_FOUND);
  }

  return res.send(task);
}

async function getAll(req, res) {
  const tasks = await Task
    .query()
    .withGraphFetched('[author]');

  return res.send(tasks);
}

async function deleteByID(req, res) {
  const { id } = req.params;

  const task = await Task
    .query()
    .deleteById(id)

  if (!task) {
    throw new CustomError('Task with this ID does not exist', s.NOT_FOUND);
  }

  return res.send(task);
}

module.exports = {
  create,
  getByID,
  getAll,
  update,
  deleteByID,
}

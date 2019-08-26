import { users, todos } from '../model';

class TodoController {
  static createTodo(req, res) {
    const todo = req.body;
    todo.completed = false;
    // check that the user with userId exist
    return users
      .findById(req.body.userId)
      .then(user => {
        // create the todo item
        return todos
        .create(todo)
        .then(todo => {
          return res.status(201).json(todo);
        })
      })
      .catch(err => res.status(500).json(err))
  }

  static getTodo(req, res) {
    let { id } = req.params;
    id = parseInt(id, 10)
    return todos
      .findById(id)
      .then(todo => {
        return res.status(200).json(todo);
      })
      .catch(err => res.status(500).json(err))
  }

  static getTodos(req, res) {
    const { userId } = req.body;
    return todos
      .findAll({
        where: {
          userId,
        }
      })
      .then(todo => {
        return res.status(200).json(todo);
      })
      .catch(err => res.status(500).json(err))
  }

  static  updateTodo(req, res) {
    let { id } = req.params;
    id = parseInt(id, 10);
    const updates = req.body;
    return todos
      .update({
        where: {
          id,
        }
      }, updates)
      .then(todo => {
        return res.status(200).json(todo)
      })
      .catch(err => {
        if (err.message && err.message === 'todo not found')
          return res.status(404).json(err);
        return res.status(500).json(err)
      });
  }

  static deleteTodo(req, res) {
    let { id } = req.params;
    id = parseInt(id, 10);
    const { userId } = req.body;
    return users
      .findById(userId)
      .then(user => {
        return todos
        .destroy({
          where: {
            id,
            userId
          }
        })
        .then(result => res.status(200).json(result))
      })
      .catch(err => {
        if (err.message && err.message === 'todo not found, not action taken')
          return res.status(404).json(err)
        return res.status(500).json(err)
      })
  }
}

export default TodoController;

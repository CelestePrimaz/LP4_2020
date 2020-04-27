const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todos.updateOptions({runValidators: true});

module.exports = Todo;
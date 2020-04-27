const resful = require('node-restful');
const mongoose = resful.mongoose;

const todoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        require: true
    },
    finalizado: {
        type: Boolean, 
        require: true, 
        default: false
    },
    creadoEm:{ 
        type: Date, 
        default: Date.now
    }
});

module.exports = resful.model('Todo', todoSchema);
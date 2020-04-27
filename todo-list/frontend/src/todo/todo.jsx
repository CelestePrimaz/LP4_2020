import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../templete/pageHeader'
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3001/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = { description: '', list:[] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
        .then(resp => console.log('Funcionou!'))
       
    }
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm  description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}
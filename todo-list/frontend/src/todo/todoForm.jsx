import React from 'react';
import Grid from '../templete/grid';
import Button from '../templete/iconButton';

export default props => (
    <div role="from" className="todoFrom">
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicionar a tarefa' 
                   value={props.description}
                   onChange={props.handleChange}></input>
        </Grid> 
        
        <Grid cols='12 3 2'>
            <Button style="primary" icon='plus' onClick={props.handleAdd}></Button>
        </Grid>
    </div>
);
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react';
import Menu from '../templete/menu';
import Rotas from './routes';

export default props => (
    <div className='container'>
        <Menu />
        <Rotas />
    </div>
);
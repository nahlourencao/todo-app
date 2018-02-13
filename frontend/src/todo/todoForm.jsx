import React from 'react'
import Grid from '../templates/grid'
import Button from '../templates/Button'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='row todo-form'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                       value={props.description}
                       onKeyUp={keyHandler}
                       onChange={props.handleChange}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <Button style='primary' icon='plus' onClick={props.handleAdd}></Button>
                <Button style='info' icon='search' onClick={props.handleSearch}></Button>
                <Button style='default' icon='close' onClick={props.handleClear}></Button>
            </Grid>
        </div>
    )
}
import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value

        }) 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('enviando los datos');
    }

    render() {


        return (

            <div className='card'>

                <form action="" className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder="Title"
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            name="responsible"
                            className='form-control'
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className='form-group'>
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <button type='submit' className=' btn btn-primary'>
                        Save
                    </button>
                </form>
            </div >
        );
    }
}

export default TodoForm;
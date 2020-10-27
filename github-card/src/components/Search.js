import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor(){
        super();
        this.state ={
            user:'',
        }
    }

    handleChange = (event) => {
        this.setState({user: event.target.value})
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.fetchCards(this.state.user)
        this.setState({user:''})
    }

    render(){
        return (
            <div className='search'>
                <form onSubmit={this.handleSearch}>
                    <label>Search</label>
                    <input 
                        value={this.state.user}
                        onChange={this.handleChange}
                        type='text'
                        name='user'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Search
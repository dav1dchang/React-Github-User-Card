import React from 'react';
import axios from 'axios';
import Search from './Search'

class UserCard extends React.Component{
    constructor(){
        super()
        this.state ={
            cards:[],
            userCard:{}
        }
    }

    componentDidMount(){
        this.fetchCards('dav1dchang');
    }//componentDidMount()

    fetchCards = (user) => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            this.setState({
                userCard: res.data
            })
            this.setState({
                cards:[this.state.userCard, ...this.state.cards]
            })
        })
        .catch(err => {
            console.log(err)
        })

    }

    render(){
        return (
            <div>
                <Search fetchCards={this.fetchCards} />
                    <div className='userCardContainer'>
                        {
                            this.state.cards.map((item) => {
                                return (
                                    <div className='userCard'>
                                        <h2>{item.login}</h2>
                                        <img src={item.avatar_url} alt={`profile pic of ${item.login}`} />
                                        <p>{`Followers: ${item.followers}`}</p>
                                    </div>
                                )
                            }) 
                        }
                    </div>
            </div>
        )
    }
}

export default UserCard
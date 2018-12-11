import React, { Component } from 'react';

class PostCreator extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    createPost(){
        const newPost = {
            content: this.state.text,
            author: 'Riller',
            time: new Date().getTime(),
            initialLikes: 0
        }
        this.props.onCreate(newPost);
    }

    render(){
        return(
            <div>
                <h3>Crie</h3>
                <input 
                    onChange={(event)=>{
                        const value = event.target.value;
                        this.setState({text: value})
                        console.log(event.target.value);
                    }}
                    value={this.state.text}/>
                <button onClick={()=> this.createPost()}> Post Now </button>
            </div>
        )
    }
}

export default PostCreator;
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import "../post.css";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Typography, Card, CardActions, CardContent } from '@material-ui/core';

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
                <Card className={'createPost'} style={{'backgroundColor':'gray'}}>
                    <CardContent>
                        <Typography style={{'color':'white'}} variant="h4" component="h2">Write your post!</Typography>
                    </CardContent>
                    <CardActions>
                    <TextField
                            label="Post Title"
                            value={this.state.text}
                            onChange={(event)=>{
                                const value = event.target.value;
                                this.setState({text: value})
                                console.log(event.target.value);
                            }}
                            margin="normal"
                            variant="filled"

                        />
        
                        <Button variant="contained" 
                                color="default"
                                onClick={()=> this.createPost()}> 
                                    Post Now 
                        </Button>
                    </CardActions>    
                </Card>   
            </div>
        )
    }
}

export default PostCreator;
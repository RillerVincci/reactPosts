import React, { Component } from 'react';
import "../post.css";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Post extends Component {
    constructor(props){
        super(props); //allow access
        this.state ={ //State of constructor
            likes: props.post.initialLikes
        } 
        this.doLike = this.doLike.bind(this)
    }

    doLike(){
        this.setState({likes: this.state.likes + 1}, ()=> {
            console.log("doLike state", this.state);
        });
    }
    
    render() {
      const post = this.props.post;
      console.log(this.props);  
      return(
        <Card className={"post"}>
            <CardContent>
                <Typography variant="h5" component="h2"> {post.author} </Typography>
                <Typography color="textSecondary">{post.content}</Typography>
                <br/>
                <Typography color="textSecondary">{post.time}</Typography>
                <Typography color="textSecondary">Likes: {this.state.likes}</Typography>
                    
            </CardContent>
            <CardActions>
                <Button
                    variant="contained" 
                    color="secondary" 
                    onClick={
                        this.doLike
                    }
                    className={'button'} > 
                    Like
                </Button> 
            </CardActions>
        </Card>
      );
    }
  }

  const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  export default Post;
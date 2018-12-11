import React, { Component } from 'react';
import Post from './components/post';
import PostCreator from './components/postCreator';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

let postArray=[
  {
    content: 'Today I made something totally awkward! Ask me on comment and I will give you the details',
    time: '16:00',
    author: 'Riller Vincci',
    initialLikes: 359555
  },
  {
    content: 'Oh My God, let me know a good movie',
    time: '16:00',
    author: 'Gabriel Stark',
    initialLikes: 3
  }
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: postArray
    }
  }

  insertPost(post){
    const myPosts = this.state.posts;
    myPosts.push(post);
    this.setState({posts: myPosts});
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              My Social Network
            </Typography>
          </Toolbar>
        </AppBar>

        <PostCreator onCreate={this.insertPost.bind(this)} />

        {this.state.posts.map((post, i) => {
          return(
            <Post key={i} post={post}/>
          )
        })}
      </div>
    );
  }
}

export default App;

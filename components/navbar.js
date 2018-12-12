import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class NavBar extends Component {
    render(){
        return(
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                    Post Social Network
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;
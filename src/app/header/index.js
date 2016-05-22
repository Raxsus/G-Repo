import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import ToggleMenu from '../toggleMenu'; // Our custom react component

const paperStyle = {
    width: '300px',
    display: 'inline-block'
}

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <ToggleMenu />
                <Paper zDepth={2} style={paperStyle}>
                    <TextField hintText="First name" underlineShow={false} />
                </Paper>
            </header>
        );
    }
}

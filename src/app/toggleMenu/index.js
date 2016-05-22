import React from 'react';

import MenuButton from './menuButton';
import MenuContent from './menuContent';

const left = {
    display: 'inline-block'
};

export default class ToggleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    open = () => this.setState({open: true});
    close = () => this.setState({open: false});

    render() {
        return (
            <div style={left}>
                <MenuButton handleToggle={this.open}/>
                <MenuContent open={this.state.open} close={this.close}/>
            </div>
        );
    }
}
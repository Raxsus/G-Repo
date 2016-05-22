import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const style = {
    margin: 20
};

export default class MenuButton extends React.Component {
    render() {
        return (
            <FloatingActionButton secondary={true} style={style} onTouchTap={this.props.handleToggle}>
                <MenuIcon />
            </FloatingActionButton>
        );
    }
}
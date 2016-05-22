import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';



export default class MenuContent extends React.Component {

    render() {
        return (
                <Drawer open={this.props.open}>

                    <ListItem onTouchTap={this.props.close}
                              primaryText="Ginie"
                              leftAvatar={<Avatar>G</Avatar>}
                              rightIcon={<BackIcon />} />



                    <MenuItem primaryText="Menu Item" />
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
        );
    }
}
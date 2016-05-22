import React from 'react';
import ReactDOM from 'react-dom';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header'

import injectTapEventPlugin from 'react-tap-event-plugin';



const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});







const Content = () => (
    <div id="content">
        {Array.from(new Array(50), (x,i) => i).map(function(r) {
            return <div>test text {r}</div>;
        })}
    </div>
);

const App = () => (
    <div>
        <Header />
        <Content />
    </div>
);

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
 injectTapEventPlugin();

ReactDOM.render(

    <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('app')
);
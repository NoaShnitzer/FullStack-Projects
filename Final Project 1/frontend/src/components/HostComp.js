import React from 'react';
import Page1_Login from './Page1_Login';
import Page2_CreateAccount from './Page2_CreateAccount'
import Page3_MainPage from './Page3_MainPage'
import {Switch, Route} from 'react-router-dom'


const HostComp = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Page1_Login}/>
                <Route path="/CreateAccount" component={Page2_CreateAccount}/>
                <Route path="/MainPage/:id" component={Page3_MainPage}/>
            </Switch>
        </div>
    );
};

export default HostComp;
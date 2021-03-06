import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login" 
                        initial 
                    />
                </Scene>

                <Scene key="main">
                    <Scene 
                        onLeft={() => Actions.pop()}
                        leftTitle="Logout"
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Welcome" 
                    />
                </Scene>
            </Scene>
        </Router>

    );
};


export default RouterComponent;

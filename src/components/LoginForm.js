import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
    onButtonPress() {
        Actions.jump('main');
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        );
    }
}


export default LoginForm;
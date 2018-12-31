import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
<<<<<<< HEAD
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
=======
import { emailChanged, passwordChanged, loginUser, loginUserFailure } from '../Actions';


class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.authFail}>{this.props.error}</Text>
				</View>
			);	
		}
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
					<Input 
						label="Email"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password"
						placeholder="Password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	authFail: {
		color: 'red',
		alignSelf: 'center',
		fontSize: 18
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, loading, error } = auth;
	return {
		email,
		password,
		loading,
		error
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser, 
	loginUserFailure })(LoginForm);
>>>>>>> initial commit

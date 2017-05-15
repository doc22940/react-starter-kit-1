import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CenteredDiv } from '../styles/Common'
import { LoginPanel } from '../styles/Login'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {loginRequest} from '../actions/login_actions'

class Login extends Component {
  state = { email: '', password: '' }

  updateField = (paramName, event) => this.setState({ [paramName]: event.target.value })

  submit = () => {
    this.props.loginRequest(this.state)
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.loginResponse)
  }

  render() {
    const { email, password } = this.state
    return (
      <CenteredDiv>
        <LoginPanel rounded={false}>
          <TextField value={email} floatingLabelText="Email"  onChange={this.updateField.bind(this, 'email')}/>
          <TextField value={password} floatingLabelText="Password" type="password"  onChange={this.updateField.bind(this, 'password')}/>
          <RaisedButton label="SUBMIT" backgroundColor="#a4c639" primary style={{ marginTop: 10 }} onClick={this.submit}/>
        </LoginPanel>
      </CenteredDiv>
    )
  }
}

const mapStateToProps = state => ({loginResponse: state.loginReducer})

export default connect(mapStateToProps, { loginRequest })(Login)

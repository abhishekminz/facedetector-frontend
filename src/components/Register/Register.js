import React from 'react';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onRegisterSubmission = () => {
        const {email, name, password} =this.state;
        if(!email || !name || !password){
            alert('Please fill in the form correctly.');
        } else {
            fetch('https://facedetector-backend.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(data => {
            if(!(data === 'unable to register')){
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }else {
                alert('Unable to Register. Please try again.')
            }
            
            
        })
        }
        
        
    }

    render() {
        const {onRouteChange} = this.props;
        return(
            <article className="straight br2 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 black-80 center">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="first-name">Name</label>
                            <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="fname"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={this.onRegisterSubmission} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                    </div>
                    <p className='pointer' onClick={ () => onRouteChange('signin') }>Already have an account? Sign in</p>
                </div>
            </main>
            </article>
        );
    }
   
}

export default Register;
// djsr/frontend/src/components/login.js

import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitWThen = this.handleSubmitWThen.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
    event.preventDefault();
    try {
        const data = await axiosInstance.post('/token/obtain/', {
            username: this.state.username,
            password: this.state.password
        });
        axiosInstance.defaults.headers['Authorization'] = "JWT " + data.access;
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        return data;
    } catch (error) {
        throw error;
      }
    }

    handleSubmitWThen(event){
    event.preventDefault();
    axiosInstance.post('/token/obtain/', {
            username: this.state.username,
            password: this.state.password
        }).then(
            result => {
                axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                localStorage.setItem('access_token', result.data.access);
                localStorage.setItem('refresh_token', result.data.refresh);
            }
    ).catch (error => {
        throw error;
     })
    
    this.forceUpdate();
    }

    render() {

    if(localStorage.getItem('access_token')) {

        return (

            <div>
                <p>You are Logged In please go to "Am I Logged in?"</p>
             </div>
            )

        } else {

        return (

            <div>
                <form onSubmit={this.handleSubmitWThen}>
                <div class="form-group">
                    <label>
                        <p>Username: </p>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        <p>Password: </p>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                </div>
                    <input class="btn btn-secondary btn-md btn-block" type="submit" value="Submit"/>
                </form>
             </div>
            )

        }
    }

}
export default Login;
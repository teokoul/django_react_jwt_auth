// djsr/frontend/src/components/App.js

import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Hello from "./hello";

import axiosInstance from "../axiosApi";

class App extends Component {

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout() {
    try {
        const response = await axiosInstance.post('/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        window.location.reload(false);
        return response;
    }
    catch (e) {
        console.log(e);
    }
};
    render() {
        return (
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Authentication</a>
                            <Link className={"nav-link"} to={"/"}>Home</Link>
                            <Link className={"nav-link"} to={"/login/"}>Login</Link>
                            <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                            <Link className={"nav-link"} to={"/hello/"}>Am I logged in?</Link>
                            <button type="button" class="btn btn-info" onClick={this.handleLogout}>Logout</button>
                    </nav>
                </div>
                <div class="container h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <main>
                            <Switch>
                                <Route exact path={"/login/"} component={Login}/>
                                <Route exact path={"/signup/"} component={Signup}/>
                                <Route exact path={"/hello/"} component={Hello}/>
                                <Route path={"/"} render={() => <div><p>Home Again</p><p>There is nothing to do here,</p></div>}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
//libs
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Context } from "./libs/context"
import api from "./libs/api"

//components
import Header from './components/header';

//views
import DashboardView from './views/dashboard';
import PostsView from './views/posts';
import PostView from './views/post';
import PostEditView from "./views/postEdit";
import PostAddView from "./views/postAdd";

//assets
import "semantic-ui-css/semantic.min.css";
import './App.css';
import { Container } from 'semantic-ui-react';

export default class App extends React.Component{

    //defining the context for all the app
    static contextType = Context;

    componentDidMount(){
        const { getPosts, getUsers } = this.context
        api.get("/posts").then(response => {
            getPosts(response.data)
        })
        api.get("/users").then(response => {
            getUsers(response.data)
        })
    }
    
    render(){
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Container>
                        <Switch>
                            <Route exact path="/home" component={DashboardView}></Route>
                            <Route exact path="/posts" component={PostsView}></Route>
                            <Route exact path="/posts/:id" component={PostView}></Route>
                            <Route exact path="/addPost" component={PostAddView}></Route>
                            <Route exact path="/posts/edit/:id" component={PostEditView}></Route>
                            <Redirect exact from="/" to="/home"></Redirect>
                            <Redirect from="*" to="/not-found" />
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

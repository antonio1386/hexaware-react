import React from "react"

const Context = React.createContext({})

class ContextProvider extends React.Component{
    
    state = {
        //posts
        posts: [],
        getPosts: posts => {
            this.setState({
                posts: posts
            })
        },
        addPost: model => {
            this.setState({ posts: [...this.state.posts, model] });
        },
        deletePost: post_id => {
            console.log("deleting post", post_id)
            const filtered_posts = this.state.posts.filter(post => post.id !== post_id)
            this.setState({
                posts: filtered_posts
            })
        },
        editPost: model => {
            const post = this.state.posts.find(post => post.id === model.id)
            post.title = model.title
            post.body = model.body
            post.userId = model.userId
            this.state.posts.map(el => el.id === post.id? post : el)
        },
        //users
        users: [],
        getUsers: users => {
            this.setState({
                users: users
            })
        },
	}

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export { Context, ContextProvider }
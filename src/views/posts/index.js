//libs
import React from "react"
import { Button, GridColumn, GridRow, Icon } from "semantic-ui-react"
import PostsList from "../../components/posts/list"
import PropTypes from "prop-types"

export default class PostsView extends React.Component{

    static propTyes = {
        posts: PropTypes.array
    }

    static defaultProps = {
        posts: []
    }

    addPost = e => {
        this.props.history.push("/addPost")
    }

    render(){
        const { posts } = this.props
        return(
            <GridRow>
                <GridColumn>
                    <h1 className="page-title">Posts</h1>
                </GridColumn>
                <GridColumn className="add">
                    <Button onClick={this.addPost} primary><Icon name="plus"/> Add</Button>
                </GridColumn>
                <PostsList posts={posts}/>
            </GridRow>
        )
    }
}
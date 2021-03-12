//libs
import React from "react"
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react"
import { Context } from "../../libs/context"
import PropTypes from "prop-types"

//components
import Post from "../../components/posts/view"
import User from "../../components/user/view"

export default class PostView extends React.Component{

    static contextType = Context;

    static propTypes = {
        post: PropTypes.any,
        user: PropTypes.any
    }

    state = {
        post: {},
        user: {},
        showModal: false,
    }

    goBack = e => {
        this.props.history.goBack()
    }

    render(){
        const post_id = parseInt(this.props.match.params.id)
        const post = this.context.posts.find(post => post.id === post_id)
        const user = this.context.users.find(user => post.userId === user.id)

        return(
            <div>
                <Grid columns={1}>
                    <GridRow>
                        <GridColumn>
                            <Button onClick={this.goBack}>Back to Post List</Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Grid columns={2}>
                    <GridRow>
                        <GridColumn>
                            <h1 className="page-title">Post Details</h1>
                            <Post post={post} title={post.title} body={post.body}></Post>
                        </GridColumn>
                        <GridColumn>
                            <h1 className="page-title">User Details</h1>
                            <User user={user} name={user.name} email={user.email} street={user.address.street}></User>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        )
    }
}
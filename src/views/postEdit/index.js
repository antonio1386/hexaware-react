//libs
import React from "react"
import { Button, Form, FormField, Grid, GridColumn, GridRow } from "semantic-ui-react"
import PropTypes from "prop-types"
import { Context } from "../../libs/context"
import api from "../../libs/api"

export default class PostAddView extends React.Component{

    static contextType = Context

    static propTypes = {
        history: PropTypes.any
    }

    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
        userId: PropTypes.number
    }

    state = {
        title: "",
        message: "",
        userId: 0,
    }

    componentDidMount(){
        const post_id = parseInt(this.props.match.params.id)
        const post = this.context.posts.find(post => post.id === post_id)
        this.setState({
            title: post.title,
            message: post.body,
            userId: post.userId
        })
    }

    goBack = e => {
        this.props.history.goBack()
    }

    onFieldChange = e => {
        e.preventDefault()
        const value = e.target.value
        const property = e.target.getAttribute("data-prop")
        this.setState({
            [property]: value
        })
    }

    onSubmit = () => {
        const { title, message, userId } = this.state
        if (title && message && userId !== 0){
            const model = {
                title: title,
                body: message,
                userId: userId,
            }
            api.put("/posts/"+this.props.match.params.id, model).then(response => {
                if(response.data){
                    response.data.userId = Number(response.data.userId)
                    this.context.editPost(response.data)
                    this.goBack()
                }
            }).catch(error => {
                this.context.editPost(model)
                this.goBack()
            })
        }else{
            alert("Please fill all the fields")
        }
    }

    goBack = e => {
        this.props.history.goBack()
    }

    render(){
        const { users } = this.context
        const { title, message, userId } = this.state
        return(
            <div>
                <Grid columns={1}>
                    <GridRow>
                        <GridColumn>
                            <Button onClick={this.goBack}>Back to Post List</Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Grid columns={1}>
                    <GridRow>
                        <GridColumn>
                            <h1 className="page-title">Edit Post</h1>
                            <div>
                                <Form>
                                    <FormField>
                                        <label>Title</label>
                                        <input onChange={this.onFieldChange} value={title} data-prop="title"/>
                                    </FormField>
                                    <FormField>
                                        <label>Message</label>
                                        <textarea onChange={this.onFieldChange} value={message} data-prop="message"></textarea>
                                    </FormField>
                                    <FormField>
                                        <label>User</label>
                                        <select data-prop="userId" value={userId} onChange={this.onFieldChange} placeholder="Select user">
                                            <option value={0}>Select User</option>
                                            {
                                                users && users.length > 0 ? users.map(value => {
                                                    return(
                                                        <option key={value.id} value={value.id}>{value.name}</option>
                                                    )
                                                }) : <option value={0}>No available users</option>
                                            }
                                        </select>
                                    </FormField>
                                    <Button type='submit' primary onClick={this.onSubmit}>Save Post</Button>
                                </Form>
                            </div>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        )
    }
}
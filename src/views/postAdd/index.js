//libs
import React from "react"
import { Button, Form, FormField, Grid, GridColumn, GridRow } from "semantic-ui-react"
import PropTypes from "prop-types"
import { Context } from "../../libs/context"
import api from "../../libs/api"
import AlertModal from "../../assets/confirmModal"

export default class PostAddView extends React.Component{

    static contextType = Context

    static propTypes = {
        history: PropTypes.any
    }

    state = {
        title: "",
        message: "",
        userId: 0,
        showModal: false
    }

    goBack = e => {
        this.props.history.goBack()
    }

    /*Modal  functionality*/
    showModal = (e) => {
        e.preventDefault()
        this.setState({
            showModal: true,
        })
    }

    onModalClose = () => {
        this.setState({
            showModal: false,
        })
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
            api.post("/posts", model).then(response => {
                if(response.data){
                    response.data.userId = Number(response.data.userId)
                    this.context.addPost(response.data)
                    //this.props.history.push("/posts")
                    this.goBack()
                }
            }).catch(error => {
                this.showModal()
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
                            <h1 className="page-title">Add Post</h1>
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
                                    <Button type='submit' primary onClick={this.onSubmit}>Add Post</Button>
                                </Form>
                            </div>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <AlertModal open={this.state.showModal} onClose={this.onModalClose} onOpen={this.onModalOpen} confirmDelete={this.onConfirmDelete}/>
            </div>
        )
    }
}
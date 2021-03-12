//libs
import React from "react"
import PropTypes from "prop-types";
import { TableRow, TableCell } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ConfirmModal from "../../../assets/confirmModal";
import { Context } from "../../../libs/context";
import api from "../../../libs/api"

export default class PostsRow extends React.Component{

    static contextType  = Context;

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string
    }

    state = {
        showModal: false,
    }

    /*Modal  functionality*/
    showDeleteModal = (e) => {
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

    onConfirmDelete = () => {
        //close the modal
        this.setState({
            showModal: false,
        })

        //delete the post from the context
        api.delete("/posts/"+this.props.post.id).then(response => {

        }).catch(error => {
            alert("Could not delete the post")
        })
        const { deletePost } = this.context
        deletePost(parseInt(this.props.post.id))
    }

    render(){
        const { post } = this.props
        return(
            <TableRow>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                        <Link className="table-option" to={`posts/`+post.id}>
                            View
                        </Link>
                        <Link className="table-option" to={`posts/edit/`+post.id}>
                            Edit
                        </Link>
                        <a className="table-option" onClick={this.showDeleteModal} href="/">
                            Delete
                        </a>
                </TableCell>
                <ConfirmModal open={this.state.showModal} onClose={this.onModalClose} onOpen={this.onModalOpen} confirmDelete={this.onConfirmDelete}/>
            </TableRow>
        )
    }
}
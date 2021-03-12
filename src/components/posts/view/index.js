//libs
import React from "react"
import PropTypes from "prop-types"
import { Message, MessageHeader } from "semantic-ui-react"

export default class Post extends React.Component{

    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
    }

    render(){
        const { post } = this.props
        return(
            <Message>
                <MessageHeader>{post.title}</MessageHeader>
                <p>{post.body}</p>
            </Message>
        )
    }
}
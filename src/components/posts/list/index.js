//libs
import React from "react"
import PropTypes from "prop-types";
import { Table, TableBody, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import { Context } from "../../../libs/context"

//components
import PostsRow from "../row";

export default class PostsList extends React.Component{

    static contextType  = Context;

    static propTypes = {
        posts: PropTypes.array
    }

    static defaultProps = {
        posts: []
    }

    render(){
        const { posts } = this.context
        return(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Id</TableHeaderCell>
                        <TableHeaderCell>Title</TableHeaderCell>
                        <TableHeaderCell>Body</TableHeaderCell>
                        <TableHeaderCell/>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        posts && posts.length > 0 && posts.map((post) => {
                            return(
                                <PostsRow key={post.id} post={post}/>
                            )
                        })
                    }
                </TableBody>
            </Table>
        )
    }
}
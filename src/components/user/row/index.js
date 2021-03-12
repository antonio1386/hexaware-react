import React from "react"
import PropTypes from "prop-types"
import { TableCell, TableRow } from "semantic-ui-react"
import { Context } from "../../../libs/context"

export default class UserRow extends React.Component{

    static contextType  = Context

    static countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        posts: PropTypes.number
    }

    render(){
        const { name, email, id } = this.props
        console.log(this.props)
        return(
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
            </TableRow>
        )
    }
}
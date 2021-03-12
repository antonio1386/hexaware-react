import React from "react"
import PropTypes from "prop-types"
import { Table, TableBody, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import UserRow from "../row"
import { Context } from "../../../libs/context"

export default class UsersList extends React.Component{

    static contextType  = Context;

    static propTypes = {
        users: PropTypes.array
    }

    render(){
        const { users } = this.props
        return(
            <div>
                <h1 className="page-title">Dashboard</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Id</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Email</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {
                        users && users.length > 0 && users.map((user) => {
                            return(
                                <UserRow name={user.name} email={user.email} id={user.id}/>
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </div>
        )
    }
}
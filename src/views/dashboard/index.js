import React from "react"
import UsersList from "../../components/user/list"
import { Context } from "../../libs/context"

export default class DashboardView extends React.Component{

    static contextType  = Context;

    render(){
        const { users } = this.context
        return(
            <div>
                <UsersList users={users}/>
            </div>
        )
    }
}
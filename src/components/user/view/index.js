//libs
import React from "react"
import PropTypes from "prop-types"
import { Card, Image } from "semantic-ui-react"

export default class User extends React.Component{

    static propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string
    }

    render(){
        const { user } = this.props
        return(
            <Card>
                <Image src='https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>
                        <span>{user.email}</span>
                    </Card.Meta>
                    <Card.Description>
                        { user.street+', '+user.suite+', '+user.city }
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
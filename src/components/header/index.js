import React from "react"
import { Link } from "react-router-dom"
import { Icon, Menu, MenuItem } from "semantic-ui-react"

//assets
import "./styles.css"

export default class Header extends React.Component{
    render(){
        return(
            <div id="menu">
                <Menu secondary>
                    <MenuItem>
                        <Link to="/home">
                            <Icon name="home"/> Home
                        </Link>
                        <Link to="/posts">
                            <Icon name="clipboard list"/> Posts
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}
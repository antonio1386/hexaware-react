import React from "react"
import PropTypes from "prop-types"
import { Modal, Header, Button } from "semantic-ui-react"

export default class AlertModal extends React.Component{

    static propTypes = {
        onClose: PropTypes.func,
        onOpen: PropTypes.func,
        open: PropTypes.bool    
    }

    render(){
        const { open, onOpen, onClose } = this.props
        return (
            <Modal
                onClose={onOpen}
                onOpen={onClose}
                open={open}
            >
            <Modal.Content>
                <Modal.Description>
                    <Header>An error ocurred, please try again later</Header>
                </Modal.Description>
            </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={onClose}>
                        Ok
                    </Button>
                </Modal.Actions>
            </Modal>
          )
    }
}
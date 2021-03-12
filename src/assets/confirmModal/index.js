import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

export default class ConfirmModal extends React.Component {
    render(){
        const { open, onOpen, onClose, confirmDelete } = this.props
        return (
            <Modal
                onClose={onOpen}
                onOpen={onClose}
                open={open}
            >
            <Modal.Content>
                <Modal.Description>
                    <Header>Are you sure you want to delete this post?</Header>
                </Modal.Description>
            </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={onClose}>
                        No
                    </Button>
                    <Button
                        content="Yes"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={confirmDelete}
                        positive
                    />
                </Modal.Actions>
            </Modal>
          )
    }
}
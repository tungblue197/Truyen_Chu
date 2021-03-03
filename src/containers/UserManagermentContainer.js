import React, { useState } from 'react'
import PropTypes from 'prop-types'
import UserTable from './UserTable'
import { Dialog } from 'evergreen-ui';

function UserManagermentContainer(props) {
    const [showModal, setShowModal] = useState(true);

    
    return (
        <div className="user-managerment">
            <div className="user-managerment__table">
                <UserTable toggleModal={props.toggleModal} />
            </div>
            <div className="user-managerment__modal">
            <Dialog
                isShown={showModal}
                title="Danger intent"
                intent="info"
                confirmLabel="Delete Something"
            >
                Dialog content
            </Dialog>
            </div>
        </div>
    )
}

UserManagermentContainer.propTypes = {

}

export default UserManagermentContainer


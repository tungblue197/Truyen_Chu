import React from 'react'
import PropTypes from 'prop-types'
import { Text , BoxIcon} from 'evergreen-ui';
import './EmptyBox.scss';

function EmptyBox({title, icon}) {
    return (
        <div className="empty-box">
            <div className="empty-box__title">
                <Text>
                    {title || 'Không có dữ liệu!'}
                </Text>
            </div>
            <div className="empty-box__icon">
                {icon || <BoxIcon size={50} color="#425A70" />}
            </div>
        </div>
    )
}

EmptyBox.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string
}

export default EmptyBox


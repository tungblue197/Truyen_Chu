import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.scss';
import { Text, SearchInput, Button, AddIcon, AnnotationIcon, TrashIcon, PrintIcon } from 'evergreen-ui';

function PageHeader(props) {
    
    return (
        <div className="page-header">
            <div className="page-header__left">
                <div className="page-header__title">
                    <Text>{props.title || 'Title page here!'}</Text>
                </div>
                <div className="page-header__sorter">
                    {props.sorter || null}
                </div>
            </div>
            <div className="page-header__right">
                <div className="page-header__btn-control">
                    <Button marginRight={8} iconBefore={AddIcon}>Thêm</Button>
                    <Button marginRight={8} iconBefore={AnnotationIcon}>Sửa</Button>  
                    <Button marginRight={8} iconBefore={TrashIcon}>Xoá</Button>
                    <Button marginRight={8} iconBefore={PrintIcon}>In</Button>                 
                </div>
                <div className="page-header__search">
                    <SearchInput placeholder="Tìm kiếm..." onChange={props.onSearch} />
                </div>
            </div>
        </div>
    )
}

PageHeader.propTypes = {

}

export default PageHeader


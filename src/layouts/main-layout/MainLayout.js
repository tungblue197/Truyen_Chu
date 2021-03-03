import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainHeader from '../../components/header/MainHeader';
import MainNav from '../../components/main-nav/MainNav';
import PageHeader from '../../components/page-header/PageHeader';
import menuActions from '../../redux/actions/MenuActions';
import './MainLayout.scss';

export const MainLayout = (props) => {
    const theme = useSelector(state => state.theme);
    const menu = useSelector(state => state.menu);
    const [textSearch, setTextSearch] = useState('');
    const theme_class  = `main-layout-${theme}`;
    const dispatch = useDispatch();

    const handleSearch = (e) => {

    }
    //componentDidMount
    useEffect(() => {
        menuActions.getMenu(dispatch);
    }, [])
    return (
        <div className={`main-layout ${theme_class}`}>
            <div className="drawer-content">
                <MainNav theme={theme} items={menu.data} />
            </div>
            <div className="body">
                <MainHeader />
                <div className="page-body">
                    <PageHeader title="Quản lý tài khoản người dùng!" onChange={handleSearch} />
                    {props.children}
                </div>
                <footer className="main-footer"></footer>
            </div>
        </div>
    )
}




export default React.memo(MainLayout);

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainHeader from '../../components/header/MainHeader';
import MainNav from '../../components/main-nav/MainNav';
import menuActions from '../../redux/actions/MenuActions';
import './MainLayout.scss';

export const MainLayout = (props) => {
    const theme = useSelector(state => state.theme);
    const menu = useSelector(state => state.menu);
    const theme_class  = `main-layout-${theme}`;
    const dispatch = useDispatch();

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
                <div className="page-body"></div>
                <footer className="main-footer"></footer>
            </div>
        </div>
    )
}




export default React.memo(MainLayout);

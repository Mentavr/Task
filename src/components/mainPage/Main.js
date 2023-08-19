import React, { useEffect } from "react";
import Link from '@mui/material/Link';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import routesPages from '../../routes/routesPages';
import { useDispatch } from 'react-redux';
import { userData } from "../../slice/apiDataSlice";
import TableUsers from "./TableUsers";
import TableEvent from "./TableEvent";
import { setConnectEvents } from "../../slice/eventStoreSlice";
import "./Main.css"


const MainPage = () => {
    const dispatch = useDispatch();
    const autContext = useAuth();
    const navigate = useNavigate();
    const { atorithationRoute, marketPageRoute } = routesPages


    const handlerExit = () => {
        autContext.logOut();
        navigate(atorithationRoute);
    }
    
    const handlerShop = () => {
        dispatch(setConnectEvents("close"))
        navigate(marketPageRoute);
    }

    useEffect(() => {
        dispatch(userData());
    },[dispatch])
    

    return (
        <div className="main_container">
            <header className="main_header">
            <nav className="nav">
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button 1.");
                    }}
                >
                    Главная страница
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={handlerExit}
                >
                    Авторизация
                </Link><Link
                    component="button"
                    variant="body2"
                    onClick={handlerShop}
                >
                    Магазин
                </Link>
            </nav>
            </header>
            <main className="main_content">
                <div style={{  width: '50%', textAlign: "center"}}>
                <h1>Список пользователе</h1>
                <TableUsers />
                </div>
                <div style={{ width: '50%', textAlign: "center" }}>
                <h1>События</h1>
                <TableEvent/>
                </div>
            </main>
        </div>
    )
};

export default MainPage;

import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import useWebSocket from 'react-use-websocket';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import routesPages from '../routes/routesPages';
import { useDispatch } from 'react-redux';
import { userData } from '../slice/apiDataSlice';
import TableUsers from '../components/mainPage/TableUsers';
import TableEvent from '../components/mainPage/TableEvent';
import { addEvents } from '../slice/eventStoreSlice';
import './Main.css';

const MainPage = () => {
  const [socketUrl, setSocketUrl] = useState('wss://test.relabs.ru/event');
  const dispatch = useDispatch();
  const autContext = useAuth();
  const navigate = useNavigate();
  const { lastJsonMessage } = useWebSocket(socketUrl);
  const { autorithationRoute, marketPageRoute, mainPageRoute } = routesPages;

  const handlerExit = () => {
    autContext.logOut();
    navigate(autorithationRoute);
  };

  const handlerShop = () => {
    navigate(marketPageRoute);
  };

  const handlerMain = () => {
    navigate(mainPageRoute);
  };

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

  useEffect(() => {
    return () => setSocketUrl(null);
  }, []);

  useEffect(() => {
    dispatch(addEvents(lastJsonMessage));
  },[lastJsonMessage]);

  return (
    <div className='main_container'>
      <header className='main_header'>
        <nav className='nav'>
          <Link
            component='button'
            variant='body2'
            onClick={handlerMain}
          >
            Главная страница
          </Link>
          <Link component='button' variant='body2' onClick={handlerExit}>
            Авторизация
          </Link>
          <Link component='button' variant='body2' onClick={handlerShop}>
            Магазин
          </Link>
        </nav>
      </header>
      <main className='main_content'>
        <div style={{ width: '50%', textAlign: 'center' }}>
          <h1>Список пользователей</h1>
          <TableUsers />
        </div>
        <div style={{ width: '50%', textAlign: 'center' }}>
          <h1>События</h1>
          <TableEvent />
        </div>
      </main>
    </div>
  );
};

export default MainPage;

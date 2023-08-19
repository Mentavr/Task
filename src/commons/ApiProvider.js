import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SocketContext from "../context/socketContext";
import { addEvents, connectSelector } from '../slice/eventStoreSlice';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';


const ApiProvider = ({children}) => {
    const  [socketUrl, setSocketUrl] = useState(null);
    const dispatch = useDispatch();
    const isConnect = useSelector(connectSelector);

    const {lastJsonMessage, getWebSocket } = useWebSocket(socketUrl);
    console.log( lastJsonMessage, getWebSocket() );


    // const zatbalEtotSoocket = (status) => {
    //     if(status === 'open') {
    //         setSocketUrl('wss://test.relabs.ru/event');
    //     } 
    //     if(status === 'close') {
    //         setSocketUrl(null);
    //     }
    // }
    

    useEffect(() => {
        dispatch(addEvents(lastJsonMessage))
        return () => setSocketUrl('wss://test.relabs.ru/event');
      }, [dispatch, lastJsonMessage, isConnect]);
    
    return (
        <SocketContext.Provider >
            {children}
        </SocketContext.Provider>
    )
}

export default ApiProvider;
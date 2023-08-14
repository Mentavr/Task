import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SocketContext from "../context/socketContext";
import { addEvents } from '../slice/eventStoreSlice';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';


const ApiProvider = ({children}) => {
    const dispatch = useDispatch();
    const ws = useWebSocket('wss://test.relabs.ru/event');
    useEffect(() => {
        dispatch(addEvents(ws.lastJsonMessage))
      }, [ws, dispatch]);
    
    return (
        <SocketContext.Provider >
            {children}
        </SocketContext.Provider>
    )
}

export default ApiProvider;
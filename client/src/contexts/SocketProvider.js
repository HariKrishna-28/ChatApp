import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
const baseUrl = "https://chat-app-28.herokuapp.com"


const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io(
            { baseUrl },
            { query: { id } }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
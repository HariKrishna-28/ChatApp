import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

// heroku project url
const baseUrl = "https://chat-application-28.herokuapp.com"

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io(
            // { baseUrl },
            process.env.PORT || 'http://localhost:5000',
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
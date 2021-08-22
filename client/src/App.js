import React from 'react'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider'

function App() {
  const [id, setId] = useLocalStorage("id")

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider>

          <Dashboard id={id} />

        </ConversationsProvider>
      </ContactsProvider>

    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />

  )
}

export default App;

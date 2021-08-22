import React, { useRef } from 'react'
import { Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

const Login = ({ onIdSubmit }) => {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (
        // <>
        //     <h1 className="flex justify-center">Welcome to chat app</h1>
        <div className="container flex items-center h-screen " >
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className="flex justify-center text-3xl font-semibold">Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>

                <div className="flex justify-center">

                    <button
                        type="submit"
                        className="bg-blue-500 mt-4 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        style={{ width: '8rem' }}
                    >
                        Login
                    </button>

                    <button
                        onClick={createNewId}
                        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        style={{ width: '8rem' }}
                    >
                        Sign Up
                    </button>

                </div>
            </Form>
        </div>
        // </>
    )
}


export default Login

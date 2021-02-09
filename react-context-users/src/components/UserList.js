import React, { useEffect } from 'react'
import { useContext } from "react"
import UserContext from "../context/User/UserContext"

export const UserList = () => {

    const { getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            profile
        </div>
    )
}

export default UserList

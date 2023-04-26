import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    console.log(typeof users)

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== userId))
    }

    const handleToggleBookMark = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    return { ...user, bookmark: !user.bookmark }
                } else {
                    return { ...user }
                }
            })
        )
    }

    return (
        <div>
            <SearchStatus number={users.length} />
            <Users
                users={users}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
            />
        </div>
    )
}

export default App

import React from "react"
import User from "./user"
import PropTypes from "prop-types"

const Users = ({ users, handleDelete, handleToggleBookMark }) => {
    return (
        <>
            <User
                users={users}
                handleDelete={handleDelete}
                handleToggleBookMark={handleToggleBookMark}
            />
        </>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
}

export default Users

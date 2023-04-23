import React from "react"
import User from "./user"

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

export default Users

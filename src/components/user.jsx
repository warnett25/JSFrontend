import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"

const User = ({ users, handleDelete, handleToggleBookMark }) => {
  return (
    users.length > 0 && (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item) => (
                  <Qualitie
                    key={item._id}
                    color={item.color}
                    name={item.name}
                    _id={item._id}
                  />
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                {
                  <BookMark
                    bookmark={user.bookmark}
                    handleToggleBookMark={handleToggleBookMark}
                    _id={user._id}
                  />
                }
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(user._id)
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  )
}

export default User

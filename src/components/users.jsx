import React, { useState } from "react"
import api from "../api"

const Users = () => {
  console.log(api.users.fetchAll())
  const [users, setUsers] = useState(api.users.fetchAll())
  // console.log(users.length)

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const getBageClasses = (num) => {
    let classes = "badge "
    classes += num !== 0 ? "bg-primary" : "bg-danger"
    return classes
  }

  const renderPhrase = (number) => {
    return number === 0 ? (
      <h2>
        <span className={getBageClasses(number)}>Никто с тобой не тусанет</span>
      </h2>
    ) : number > 4 || number === 1 ? (
      <h2>
        <span className={getBageClasses(number)}>
          {number} человек тусанет с тобой сегодня
        </span>
      </h2>
    ) : (
      <h2>
        <span className={getBageClasses(number)}>
          {number} человека тусанет с тобой сегодня
        </span>
      </h2>
    )
  }

  const renderUsersTable = () => {
    return users.length !== 0 ? (
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
                  <span className={`badge bg-${item.color} m-2`}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
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
    ) : (
      ""
    )
  }

  return (
    <>
      {renderPhrase(users.length)}
      {renderUsersTable()}
    </>
  )
}

export default Users

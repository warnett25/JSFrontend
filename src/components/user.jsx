import React, { useState } from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"

const User = ({ users, handleDelete, handleToggleBookMark }) => {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <>
            {users.length > 0 && (
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
                        {userCrop.map((user) => (
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
                                            handleToggleBookMark={
                                                handleToggleBookMark
                                            }
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
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

User.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
}

export default User

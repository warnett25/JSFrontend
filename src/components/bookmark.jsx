import React from "react"

const BookMark = ({ bookmark, handleToggleBookMark, _id }) => {
  const getClasses = () => {
    let classes = "bi bi-bookmark"
    return (classes += bookmark ? "-fill" : "")
  }

  return (
    <i className={getClasses()} onClick={() => handleToggleBookMark(_id)}></i>
  )
}

export default BookMark

import React, { useState } from "react"

const BookMark = ({ bookmark, handleToggleBookMark, _id }) => {
  console.log(bookmark)
  //   const [bookmark, setBookmark] = useState(props.bookmark)

  //   const handleClick = () => {
  //     setBookmark((prevState) => !prevState)
  //   }
  // {users} = props

  const getClasses = () => {
    let classes = "bi bi-bookmark"
    return (classes += bookmark ? "-fill" : "")
  }

  return (
    <i className={getClasses()} onClick={() => handleToggleBookMark(_id)}></i>
  )
}

export default BookMark

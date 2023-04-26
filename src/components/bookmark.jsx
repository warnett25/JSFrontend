import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ bookmark, handleToggleBookMark, _id }) => {
    const getClasses = () => {
        let classes = "bi bi-bookmark"
        return (classes += bookmark ? "-fill" : "")
    }

    return (
        <i
            className={getClasses()}
            onClick={() => handleToggleBookMark(_id)}
        ></i>
    )
}

BookMark.propTypes = {
    bookmark: PropTypes.bool.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
}

export default BookMark

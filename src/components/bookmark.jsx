import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ status, onHandleToggleBookmark }) => {
    const getClasses = () => {
        let classes = "bi bi-bookmark"
        return (classes += status ? "-fill" : "")
    }

    return <i className={getClasses()} onClick={onHandleToggleBookmark}></i>
}

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    _id: PropTypes.string,
    onHandleToggleBookmark: PropTypes.func
}

export default BookMark

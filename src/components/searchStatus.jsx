import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ number }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if ((number > 4 && number < 15) || number === 1) {
            return "человек тусанет"
        }
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    }

    return (
        <>
            <h2>
                <span
                    className={
                        "badge " + (number > 0 ? "bg-primary" : "bg-danger")
                    }
                >
                    {number > 0
                        ? ` ${
                              number + " " + renderPhrase(number)
                          } с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h2>
        </>
    )
}

SearchStatus.propTypes = {
    number: PropTypes.number.isRequired
}

export default SearchStatus

import PropTypes from 'prop-types'
import { useState } from 'react';

function Button({ label = "Button", backgroundColor = "buttonface", size = "md", onClick }) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 2

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    };

    const handleMouseLeave = () => {
        setIsHover(false)
    };

    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: isHover ? "1px solid black" : "1px solid transparent",
        cursor: "pointer",
        fontSize: size === "lg" ? `20px` : `16px`,
    }

    return (
        <button
            onClick={onClick}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func
}

export default Button

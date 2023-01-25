import PropTypes from 'prop-types'

function Card({ label = "Card",}) {

    const style = {
        backgroundColor: "white",
        padding: "calc(var(--spacing) * 3) 1rem",
        marginBottom: "var(--spacing)",
        cursor: "grab",
    }

    return(
        <div style={style} className="card">{label}</div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
}

export default Card

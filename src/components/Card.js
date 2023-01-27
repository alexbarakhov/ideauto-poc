import PropTypes from 'prop-types'
import { useDrag } from "react-dnd";

function Card({id, label = "Card", backgroundColor = "white", }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const style = {
        backgroundColor,
        padding: "calc(var(--spacing) * 3) 1rem",
        marginBottom: "var(--spacing)",
        cursor: "grab",
        opacity: isDragging ? "0.5" : "1",
    }

    return (
        <div ref={drag} id={id} style={style} className="card">
            {label}
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    backgroundColor: PropTypes.string,

}

export default Card

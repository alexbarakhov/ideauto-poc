import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import { useContext } from 'react'
import { CardContext } from './Main'
import Button from './Button'

function Card(props) {
  const { handleStatus } = useContext(CardContext)

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { id: props._id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  function handleClick() {
    handleStatus(props._id)
  }

  const style = {
    backgroundColor: props.bgColor,
    opacity: isDragging ? '0.5' : '1',
  }

  return (
    <div
      style={style}
      ref={drag}
      key={props._id}
      id={props._id}
      className={`card ${isDragging ? 'shake' : null}`}
    >
      <span>status: {props.status}</span>
      <p className='card-title'>
        {props.title} - {props.category}
      </p>

      {props.status !== 'wip' && (
        <div className='card-close'>
          <Button label='🗑️' onClick={handleClick} />
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  _id: PropTypes.number,
  label: PropTypes.string,
  bgColor: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}

export default Card

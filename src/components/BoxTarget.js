import { useDrop } from 'react-dnd'
import { useContext } from 'react'
import { CardContext } from './Main'

const BoxTarget = props => {
  const { handleStatus } = useContext(CardContext)

  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: (item, monitor) => handleStatus(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const style = {
    width: '100%',
    height: '100%',
    backgroundColor: isOver ? '#e3e3e3' : 'white',
  }

  return (
    <div ref={drop} style={style}>
      {props.children}
    </div>
  )
}

export default BoxTarget

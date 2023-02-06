import { useState, createContext } from 'react'
import ResizePanel from 'react-resize-panel'
import Tree from './Tree'
import CircularProgress from '@mui/material/CircularProgress'
import Tabs from './Tabs'
import Card from './Card'
import BoxTarget from './BoxTarget'

export const CardContext = createContext({
  handleStatus: null,
})

function Main() {
  const [taskList, setTaskList] = useState([
    {
      _id: 1,
      status: 'wip',
      category: 'rosita',
      title: 'Title 1',
      bgColor: 'pink',
    },
    {
      _id: 2,
      status: 'wip',
      category: 'verdito',
      title: 'Title 2',
      bgColor: 'lightgreen',
    },
    {
      _id: 3,
      status: 'wip',
      category: 'azulito',
      title: 'Title 3',
      bgColor: 'lightblue',
    },
  ])

  const handleStatus = _id => {
    const task = taskList.filter(task => task._id === _id)
    task[0].status === 'wip'
      ? (task[0].status = 'done')
      : (task[0].status = 'wip')

    setTaskList(taskList.filter(task => task._id !== _id).concat(task[0]))
  }

  return (
    <CardContext.Provider value={{ handleStatus }}>
      <div className='panelsContainer'>
        <ResizePanel
          direction='e'
          style={{ width: '30vw', minWidth: '240px', maxWidth: '49vw' }}
        >
          <aside className='aside'>
            <BoxTarget>
              {taskList
                .filter((task, i) => task.status === 'wip')
                .map((task, i) => (
                  <Card
                    key={task._id}
                    _id={task._id}
                    category={task.category}
                    title={task.title}
                    status={task.status}
                    bgColor={task.bgColor}
                  />
                ))}
            </BoxTarget>
          </aside>
        </ResizePanel>

        <main className='main'>
          <ResizePanel
            direction='e'
            style={{ width: '30vw', maxWidth: '50vw' }}
          >
            <div className='sections'>
              <section className='section section--1'>
                <BoxTarget>
                  {taskList
                    .filter((task, i) => task.status === 'done')
                    .map((task, i) => (
                      <Card
                        key={task._id}
                        _id={task._id}
                        category={task.category}
                        title={task.title}
                        status={task.status}
                        bgColor={task.bgColor}
                      />
                    ))}
                </BoxTarget>
              </section>
              <section className='section section--2'>
                <CircularProgress />
              </section>
              <section className='section'>
                <Tree />
              </section>
            </div>
          </ResizePanel>
          <div className='table'>
            <Tabs />
          </div>
        </main>
      </div>
    </CardContext.Provider>
  )
}

export default Main

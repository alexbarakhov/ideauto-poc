import Card from './Card'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import ResizePanel from "react-resize-panel";
import Tree from './Tree';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from './Tabs';

const CardList = [
    {
        id: 1,
        bgColor: "lightblue",
        name: "Drag Card 1",

    },
    {
        id: 2,
        bgColor: "lightgreen",
        name: "Drag Card 2",

    },
    {
        id: 3,
        bgColor: "lightblue",
        name: "Drag Card 3",

    },
    {
        id: 4,
        bgColor: "lightgreen",
        name: "Drag Card 4",

    },
    {
        id: 5,
        bgColor: "lightblue",
        name: "Drag Card 5",

    },
]


function Main() {

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => {
            addCardToBoard(item.id)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))


    const addCardToBoard = (id) => {
        console.log(id)
        const cardList = CardList.filter((card => id === card.id))
        console.log(cardList);
        setBoard((board) => [...board, cardList[0]])
    }

    const sectionStyles = {
        backgroundColor: isOver ? "#ddd" : "#eee",
    }

    return (
        <div className="panelsContainer">

            <ResizePanel
                direction="e"
                style={{ width: "30vw", minWidth: "240px", maxWidth: "49vw", }}
            >
                <aside className="aside">
                    {CardList.map((card, index) => {
                        return <Card
                            id={card.id}
                            label={card.name}
                            backgroundColor={card.bgColor}
                            key={index} />
                    })}
                    <Tree/>
                </aside>
            </ResizePanel>

            <main className="main">

                <ResizePanel
                    direction="e"
                    style={{ width: "30vw", maxWidth: "50vw", }}
                >
                    <div className="sections">
                        <section
                            className="section section--1"
                            ref={drop}
                            style={sectionStyles}>

                            {board.map((card, index) => {
                                return <Card
                                    id={card.id}
                                    label={card.name}
                                    backgroundColor={card.bgColor}
                                    key={index} />
                            })}

                        </section>
                        <section className="section section--2">
                            <CircularProgress />
                        </section>
                        <section className="section"></section>
                    </div>
                </ResizePanel>
                <div className="table">
                    <Tabs/>
                </div>

            </main>

        </div>
    )
}

export default Main

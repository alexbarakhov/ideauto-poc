import Card from './Card'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import ResizePanel from "react-resize-panel";

const CardList = [
    {
        id: 1,
        bgColor: "lightblue",
        name: "Card 1",

    },
    {
        id: 2,
        bgColor: "lightgreen",
        name: "Card 2",

    },
    {
        id: 3,
        bgColor: "lightblue",
        name: "Card 3",

    },
    {
        id: 4,
        bgColor: "lightgreen",
        name: "Card 4",

    },
]

function DragDrop() {


    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => addCardToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))


    const addCardToBoard = (id) => {
        //console.log(id)
        const cardList = CardList.filter((picture => id === picture.id))
        //console.log(cardList);
        setBoard((board) => [...board, cardList[0]])
    }

    const sectionStyles = {
        backgroundColor: isOver ? "#c7c7c7" : "var(--grey-light)",
    }

    return (
        <div className="panelsContainer">

            <ResizePanel
                direction="e"
                style={{ width: "30vw", minWidth: "240px", maxWidth: "50vw", }}
            >
                <aside className="aside">
                    {CardList.map((picture) => {
                        return <Card id={picture.id} label={picture.name} backgroundColor={picture.bgColor} key={picture.id} />
                    })}
                </aside>
            </ResizePanel>

            <main className="main">

                <ResizePanel
                    direction="e"
                    style={{ width: "30vw", minWidth: "240px", maxWidth: "50vw", }}
                >
                    <div className="sections">
                        <section className="section section--1" ref={drop} style={sectionStyles}>

                            {board.map((picture) => {
                                return <Card id={picture.id} label={picture.name} backgroundColor={picture.bgColor} key={picture.id} />
                            })}

                        </section>
                        <section className="section section--2">Drop 2</section>
                        <section className="section section--3">Drop 3</section>
                    </div>
                </ResizePanel>
                <div className="table"></div>

            </main>

        </div>
    )
}

export default DragDrop

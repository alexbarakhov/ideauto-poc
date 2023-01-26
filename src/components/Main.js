import Card from './Card'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import ResizePanel from "react-resize-panel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
        //console.log(id)
        const cardList = CardList.filter((card => id === card.id))
        //console.log(cardList);
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
                        <section className="section"></section>
                        <section className="section"></section>
                    </div>
                </ResizePanel>
                <div className="table">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </main>

        </div>
    )
}

export default Main

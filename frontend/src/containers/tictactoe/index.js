import React, { useState, useEffect } from 'react'
import { Grid, Cell } from '../../components/grid';

function Index() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState(0);

    const onClick = index => {
        const players = ["X", "O"];
        let newBoard = [...board]

        if (board[index] === '') {
            newBoard[index] = players[turn];

            setTurn((turn + 1) % 2);
            setBoard(newBoard);
        }
    }

    return (
        <Grid
            height={3}
            width={3}
            bgColor={"#34495e"}
            borderColor={"#2c3e50"} 
        >

            {
                board.map((cell, index) => (
                    <Cell
                        key={index}
                        borderColor={"#2c3e50"}
                        onClick={() => onClick(index)}               
                    >
                        {cell}
                    </Cell>
                ))
            }
        </Grid>  
    )
}

export default Index

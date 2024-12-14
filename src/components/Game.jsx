import {calculateWinner} from '../../src/helpers'
import x from '../assets/x.png'
import o from '../assets/o.png'
import Board from "./Board"
import { useState } from "react"
export default function Game(){

    /* the state of the board to start the game */
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)
    console.log(winner)

    function handleClick(i){
        /* making a copy of board state */
        const boardCopy = [...board]
        console.log(board[i])
        /* if game won and space occupied then return */
        if(winner || boardCopy[i]){
            return
        }
        /* other fill with x or 0 */
        boardCopy[i] = xIsNext? 'x' : 'o'
        setBoard(boardCopy)
        setXisNext(prevState => !prevState)
    }

    const jumpTo = () => {

    }

    const renderMoves = ()=> <button className='bg-slate-100 p-4 border-solid border-2 border-blue-200
        cursor-pointer' onClick={() => setBoard(Array(9).fill(null))}> New Game </button>

    

    return (
        <div className="p-4">
            <Board squares={board} onClick={handleClick} />
            <div className='w-32 mx-auto mt-8'>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {winner && renderMoves()}
            </div>
        </div>
    )
}
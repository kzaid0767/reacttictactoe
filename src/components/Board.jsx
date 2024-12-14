import Square from "./Square"
export default function Board({squares, onClick}){

    const style = {
        border: '4px solid darkblue',
        borderRadius: '10px',
        width: '250px',
        height: '250px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    };

    const squareElements = squares.map((square,i)=> <Square key={i+1} value={square} onClick={()=>onClick(i)}/>
    )

    return (
        <div className="grid grid-cols-3 gap-2 m-auto max-w-96">
            {squareElements}
        </div>
    )
}
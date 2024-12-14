export default function Square({onClick, value}) {

    const style = {
        background: 'lightblue',
        border: '2px solid darkblue',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }

    return(
        <button className="text-3xl cursor-pointer bg-slate-200
            border-solid border-blue-300 border-2 p-4 font-bold h-20" onClick={onClick}>{value}</button>
    )
}
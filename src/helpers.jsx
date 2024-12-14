export function calculateWinner(squares) {
    /* look up array for winning moves on the board */
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    /* checking to see if there is a winning row */
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
}
    return null;
}

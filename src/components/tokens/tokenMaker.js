export const tokenMaker = (initialState,puzzleState, boardSolution) =>{
    if(initialState) localStorage.setItem("initialState",JSON.stringify({initialState}))
    if(puzzleState) localStorage.setItem("puzzleState",JSON.stringify({puzzleState}))
    if(boardSolution) localStorage.setItem("boardSolution",JSON.stringify({boardSolution}))
}
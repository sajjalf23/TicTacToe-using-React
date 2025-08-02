import Square from "./square"
import "./board.css"
import {useState} from "react"
function Board() {
    const[state,changestate] = useState(Array(9).fill(null))
    const[xturn,changexturn] = useState(1)
    const checkwinner=()=>{
        const listwinner=[
            [0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,4,6],[0,3,6],[2,5,8],
        ];
        for (let logic of listwinner){
            const[a,b,c] = logic;
            if(state[a] === state[b] && state[b] === state[c] && state[a] != null){
                return state[a];
            }
        }
        return false;
    }
    const istie=()=>{
        if(!state.includes(null))
            return true;
        return false
    }
    const Tie = istie()
    const iswinner = checkwinner();
    const handleclick=(index)=>{
        console.log("done")
        const copy = [...state];
        copy[index] = xturn === 1 ? "X" :  "0";
        changestate(copy);
        xturn === 1 ? changexturn(0) :  changexturn(1);      
    }
    const reset=()=>{
        changestate(Array(9).fill(null))
    }
    return (
        <>
            <h1> TIC TAC TOE </h1>
            <div className="board_container">
                {(iswinner || Tie) ? 
                (<div>
                { Tie && <h1> TIE </h1> }
                { !Tie && <h1> {iswinner} is the winner </h1>}
                <button onClick={reset}> RESET </button> 
                </div> ) 
                : 
                (<><div className="board_row">
                    <Square onClick={()=>handleclick(0)} value={state[0]}></Square>
                    <Square onClick={()=>handleclick(1)} value={state[1]}></Square>
                    <Square onClick={()=>handleclick(2)} value={state[2]}></Square>
                </div>
                <div className="board_row">
                    <Square onClick={()=>handleclick(3)} value={state[3]}></Square>
                    <Square onClick={()=>handleclick(4)} value={state[4]}></Square>
                    <Square onClick={()=>handleclick(5)} value={state[5]}></Square>
                </div>
                <div className="board_row">
                    <Square onClick={()=>handleclick(6)} value={state[6]}></Square>
                    <Square onClick={()=>handleclick(7)} value={state[7]}></Square>
                    <Square onClick={()=>handleclick(8)} value={state[8]}></Square>
                </div> </>) }
            </div>
        </>
    )
}

export default Board
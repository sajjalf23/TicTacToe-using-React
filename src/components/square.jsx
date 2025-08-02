import "./square.css"

function Square(props){
    return (
        <>
        <div onClick={props.onClick} className="board_square">
            <h5>{props.value}</h5>
        </div>
        </>
    )
}

export default Square
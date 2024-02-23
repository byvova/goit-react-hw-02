




export const Options = ({ feedback }) => {

    return (
        <div>
            <button onClick={() => feedback('good')}>Good </button>
            <button onClick={() => feedback('neutral')}>Neutral</button>
            <button onClick={() => feedback('bad')}>Bad</button>
            <button>Reset</button>
        </div>
    )
}
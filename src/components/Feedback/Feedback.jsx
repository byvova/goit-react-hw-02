


export const Feedback = ({ response, total }) => {

    return (
        <>
            <h2>Good: {response.good}</h2>
            <h2>Neutral: {response.neutral}</h2>
            <h2>Bad: {response.bad}</h2>
            <h2>Total: {total}</h2>
            <h2>Positive: </h2>
        </>
    )
}
export const Options = ({ feedback, resetFeedback, click }) => {
    const handleButtonClick = (feedbackType) => {
        click(true);
        feedback(feedbackType);
    };

    const handleResetClick = () => {
        resetFeedback();
        click(false);
    };

    return (
        <div>
            <button onClick={() => handleButtonClick('good')}>Good </button>
            <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
            <button onClick={() => handleButtonClick('bad')}>Bad</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}

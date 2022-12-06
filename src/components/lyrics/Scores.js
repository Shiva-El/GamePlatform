
function Scores(props) {
    let {score} = props;
    return (  
        <div> Correct: {score.correct} Wrong: {score.wrong}</div>
    );
}

export default Scores;
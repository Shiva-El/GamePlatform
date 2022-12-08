import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  correct: {
    fontSize: "1.5rem",
    BackgroundColor: "white",
  },
  wrong: {
    fontSize: "1.5rem",
    BackgroundColor: "white",
  },
});

function Scores(props) {
  let { score } = props;
  const classes = useStyles(props);
  return (
    <div>
      <span style={{backgroundColor: 'green', color: 'white', fontSize: "2rem"}}>{score.correct}</span> {' '}
      <span style={{backgroundColor: 'red', color: 'white', fontSize: "2rem"}}>{score.wrong}</span>
    </div>
  );
}

export default Scores;

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
  let { correct, wrong } = props;
  const classes = useStyles(props);
  return (
    <div>
      <span style={{backgroundColor: 'green', color: 'white', fontSize: "2rem"}}>{correct}</span> {' '}
      <span style={{backgroundColor: 'red', color: 'white', fontSize: "2rem"}}>{wrong}</span>
    </div>
  );
}

export default Scores;

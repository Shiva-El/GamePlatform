// a Question component to render each question
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  lyrics: {
    fontSize: "1.5rem",
    fontColor: "white",
  },
});

function Question(props) {
  const { lyrics, options, onOptionClicked } = props;
  const classes = useStyles(props);

  return (
    <div>
      <Typography sx={{ color: "white" }} variant="h4">
        {lyrics}
      </Typography>
      <p className={classes.lyrics}>{lyrics}</p>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(0)}>
        {options[0]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(1)}>
        {options[1]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(2)}>
        {options[2]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(3)}>
        {options[3]}
      </Button>
    </div>
  );
}
export default Question;

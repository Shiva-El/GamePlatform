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
  const { lyric, choices, onOptionClicked } = props;
  console.log(choices);
  const classes = useStyles(props);

  return (
    <div>
      <Typography sx={{ color: "white" }} variant="h4">
        {lyric}
      </Typography>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(0)}>
        {choices[0]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(1)}>
        {choices[1]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(2)}>
        {choices[2]}
      </Button>
      <Button variant="contained" sx={{color: "white"}} size="large" onClick={() => onOptionClicked(3)}>
        {choices[3]}
      </Button>
    </div>
  );
}
export default Question;

import Question from "./Question";
import VideoPlayer from "./VideoPlayer";
import SongTitle from "./SongTitle";
import Scores from "./Scores";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import Header from "../Header.jsx";
import UsernameContext from "../../context/UsernameContext";


const useStyles = makeStyles({
    grid:{
    height: "100vh",
      backgroundColor: 'black',
  },
  // grids: {
  //     border: '4px solid green',
  // },
    lyric:{
      fontSize: '2.4rem',
  },
});




function LyricsGame(props) {
  const [username, setUsername] = React.useContext(UsernameContext);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [data, setData] = useState({
    choices: [],
    video: {},
  });

  useEffect(() => {
    fetch("http://localhost:3001/lyrics/" + username)
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json);
      setData(json);
    });
  }, [])

  function onOptionClicked(optionIndex) {
    let { correct, wrong } = score;
    if (optionIndex === data.correctAnswer) {
      correct++;
    } else {
      wrong++;
    }
    setScore({ correct, wrong });
  }

  const classes = useStyles(props);
  return (
    <div>
      <Header />
    <Grid container spacing={2} className={classes.grid} style={{width: "96%", marginLeft: "2%", marginBottom: "2%"}}>
        <Grid item xs={12}></Grid>
        <Grid item xs={8} className={classes.grids}>
          <div></div>
        </Grid>
        <Grid item xs={4} className={classes.grids}>
          <Scores score={score} />
        </Grid>
        <Grid item xs={6} className={classes.grids}>
        <VideoPlayer className={classes.component}
            url={data.video.url}
            start={data.video.start}
            end={data.video.end}
          />
        </Grid>
        <Grid item xs={6} className={classes.grids}>
          <Question
            lyric={data.lyric}
            choices={data.choices}
            correctAnswer={data.correctAnswer}
            onOptionClicked={onOptionClicked}
          ></Question>
        </Grid>
        <Grid item xs={6} className={classes.grids}>
          <SongTitle title={data.title} singer={data.singer} />
        </Grid>
        <Grid item xs={6} className={classes.grids}></Grid>
      </Grid>
    </div>
  );
}
export default LyricsGame;

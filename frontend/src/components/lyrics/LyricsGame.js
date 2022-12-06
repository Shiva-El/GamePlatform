import Question from "./Question";
import VideoPlayer from "./VideoPlayer";
import SongTitle from "./SongTitle";
import Scores from "./Scores";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

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
  const data = {
    title: "From Eden",
    singer: "Hozier",
    lyrics: "Sin City's cold and empty, no one's around to ..... ",
    options: ["love me", "judge me", "hug me", "dump me"],
    correctAnswer: 1,
    video: {
      url: "youtube.com",
      start: 0,
      end: 10,
    },
  };

  let [score, setScore] = useState({ correct: 0, wrong: 0 });

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
    
    <Grid container spacing={2} className={classes.grid}>
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
          lyrics={data.lyrics}
          options={data.options}
          correctAnswer={data.correctAnswer}
          onOptionClicked={onOptionClicked}
        ></Question>
      </Grid>
      <Grid item xs={6} className={classes.grids}>
        <SongTitle title={data.title} singer={data.singer} />
      </Grid>
      <Grid item xs={6} className={classes.grids}></Grid>
    </Grid>
  );
}
export default LyricsGame;

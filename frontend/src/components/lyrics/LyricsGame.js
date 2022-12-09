import Question from "./Question";
import VideoPlayer from "./VideoPlayer";
import SongTitle from "./SongTitle";
import Scores from "./Scores";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import Header from "../Header.jsx";
import UsernameContext from "../../context/UsernameContext";
import Typography from "@mui/material/Typography";

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
  const [userState, setUserState] = useState();
  const [lyric, setLyric] = useState({choices: [], video: {}});

  useEffect(() => {
    fetch("http://localhost:3001/users/" + username + "/lyrics")
    .then((response) => response.json())
    .then((userState) => {
      setUserState(userState);
    });
  }, [])

  useEffect(() => {
    if (!userState || userState.finished) {
      return;
    }
    const lyricId = userState.lastLyricId + 1;
    console.log(lyricId);
    fetch("http://localhost:3001/lyrics/" + lyricId)
    .then((response) => response.json())
    .then((lyric) => {
      setLyric(lyric);
    }).catch(function(){
      setUserState({...userState, finished: true})
    })
  }, [userState])

  function onOptionClicked(optionIndex) {
    let {correct, wrong} = userState;
    if (optionIndex === lyric.correctChoice) {
      correct++;
    } else {
      wrong++;
    }
    const newState = {lastLyricId: lyric.lyricId, correct, wrong}
    const dataToPost = {
      method: 'PATCH',
      body: JSON.stringify(newState),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
    fetch('http://localhost:3001/users/' + username + "/lyrics", dataToPost)
      .then(() => {
        setUserState(newState);
      })
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
          <Scores correct={userState?.correct} wrong={userState?.wrong} />
        </Grid>
        {userState?.finished ? 
          <Typography sx={{ color: "white" }} variant="h4">
            You have answered all!
          </Typography>
          :
          <>
            <Grid item xs={6} className={classes.grids}>
            <VideoPlayer className={classes.component}
                url={lyric.video.url}
                start={lyric.video.start}
                end={lyric.video.end}
              />
            </Grid>
            <Grid item xs={6} className={classes.grids}>
              <Question
                lyric={lyric.lyric}
                choices={lyric.choices}
                correctAnswer={lyric.correctAnswer}
                onOptionClicked={onOptionClicked}
              ></Question>
            </Grid>
            <Grid item xs={6} className={classes.grids}>
              <SongTitle title={lyric.title} singer={lyric.singer} />
            </Grid>
            <Grid item xs={6} className={classes.grids}></Grid>
          </>}
      </Grid>
    </div>
  );
}
export default LyricsGame;

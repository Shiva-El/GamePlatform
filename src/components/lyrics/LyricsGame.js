import Question from "./Question";
import VideoPlayer from "./VideoPlayer";
import SongTitle from "./SongTitle";
import Scores from "./Scores";
import { useState } from "react";

function LyricsGame(props) {
    const data = {
        title: "From Eden",
        singer: "Hozier",
        lyrics: "Sin City's cold and empty, no one's around to ..... ",
        options: [
            "love me",
            "judge me",
            "hug me",
            "dump me"
        ],
        correctAnswer: 1,
        video: {
            url: "youtube.com",
            start: 0,
            end: 10
        }
    };

    let [score, setScore] = useState({correct:0, wrong:0})

    function onOptionClicked(optionIndex) {
        let {correct, wrong} = score;
        if (optionIndex === data.correctAnswer) {
            correct++;
        } else {
            wrong++;
        }
        setScore({correct, wrong});
    }

    return (  
        <div>
            <Question lyrics={data.lyrics} options={data.options} correctAnswer={data.correctAnswer} onOptionClicked={onOptionClicked}></Question>
            <VideoPlayer url={data.video.url} start={data.video.start} end={data.video.end} />
            <SongTitle title={data.title} singer={data.singer}/>
            <Scores score={score} />
        </div>
    );
}
export default LyricsGame;
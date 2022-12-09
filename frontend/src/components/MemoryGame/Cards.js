import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Card from "./Card";

function Cards() {
  const [moves, setMoves] = useState(0);
  const [clearedCards, setClearedCards] = useState({});
  const [player, setPlayer] = useState([]);
  const [cards, setCards] = useState(
    [
      { id: 0, name: "David Lyon", status: "", img: "/images/coffeebean1.png" },
      { id: 0, name: "David Lyon", status: "", img: "/images/coffeebean1.png" },
      {
        id: 1,
        name: "David Lyon2",
        status: "",
        img: "/images/coffeebean2.png",
      },
      {
        id: 1,
        name: "David Lyon2",
        status: "",
        img: "/images/coffeebean2.png",
      },
      {
        id: 2,
        name: "David Lyon3",
        status: "",
        img: "/images/coffeebean3.png",
      },
      {
        id: 2,
        name: "David Lyon3",
        status: "",
        img: "/images/coffeebean3.png",
      },
      {
        id: 3,
        name: "David Lyon4",
        status: "",
        img: "/images/coffeebean4.png",
      },
      {
        id: 3,
        name: "David Lyon4",
        status: "",
        img: "/images/coffeebean4.png",
      },
      {
        id: 4,
        name: "David Lyon5",
        status: "",
        img: "/images/coffeebean5.png",
      },
      {
        id: 4,
        name: "David Lyon5",
        status: "",
        img: "/images/coffeebean5.png",
      },
      {
        id: 5,
        name: "David Lyon6",
        status: "",
        img: "/images/coffeebean6.png",
      },
      {
        id: 5,
        name: "David Lyon6",
        status: "",
        img: "/images/coffeebean6.png",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);

  const previousIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[previousCardState].status = "unmatched";
        cards[currentCard].status = "unmatched";
        setCards([...cards]);
      }, 2000);
    }
  };

  const clickhandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        setMoves((moves) => moves + 1);
        //GetScore();
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("Card already selected");
    }
  };
/*
  const gamecomplete = () => {
    if (Object.keys(clearedCards).length === cards.length) {
      alert("Game Finished!");
    }
    
    if ({moves}.moves < player.memoryScore || player.memoryScore == 0) {
      SaveScore();
      console.log("saved");
    }

    console.log("checked");
  };

  setInterval(gamecomplete, 1000);
*/
  const Restart = () => {
    window.location.reload(false);
  };

  /*Save score
  function SaveScore(){
    const username = JSON.parse(localStorage.getItem('username'));
    let savedScore = {moves}.moves;
    console.log({savedScore}.savedScore);
    fetch("http://localhost:3001/leaderboard/"+{username}.username+"/memoryScore", 
        {method: "PATCH",
        body: JSON.stringify({
          memoryScore: {savedScore}.savedScore
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
        })
    .then((data) => data.json())
    .then((json) =>
    JSON.stringify(json));
}

  //Get score
  function GetScore() {
    const username = JSON.parse(localStorage.getItem('username'));
    fetch("http://localhost:3001/leaderboard/"+{username}.username,
{ method: "GET" })
.then((data) => data.json())
.then((json) =>
setPlayer(json));
}
*/


  return (
    <>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              key={index}
              index={index}
              clickhandler={clickhandler}
            />
          );
        })}
      </div>

      <h2 className="text">Moves: {moves}</h2>

      <div className="bold">
        <Button onClick={Restart} variant="outlined" className="button">
          Restart <br /> 
          {/*<span style={{fontSize: "70%"}}>(saves your high score!)</span>*/}
        </Button>
      </div>
    </>
  );
}

export default Cards;

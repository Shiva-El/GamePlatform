import GameEngine from "./GameEngine";
import styled from "styled-components";
import Arcade from "../../images/Arcade.png";
import Header from "../Header";

function FlyingBean() {
  return (
    <div>
      <Header />
      <GameConsole>
        <GameEngine />
      </GameConsole>
    </div>
  );
}

const GameConsole = styled.div`
  position: relative;
  height: 79vh;
  background-image: url(${Arcade});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 96rem;
`;

export default FlyingBean;

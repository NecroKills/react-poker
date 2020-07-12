import styled from 'styled-components';
import { shade } from 'polished';

import fundoCarta from '../../assets/cards/fundo_carta.jpg';
import spadesTwo from '../../assets/cards/spades/4.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const DeckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

export const DeckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 125px;
`;

export const Deck = styled.div`
  background: url(${fundoCarta});
  border: 2px solid white;
  width: 80px;
  height: 100px;
  margin: 5px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff9000;
  border-style: solid;
  border-bottom-width: 6px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;

  width: 500px;
  height: 125px;
`;

export const Card = styled.div`
  background: url(${spadesTwo});
  border: 2px solid white;
  width: 80px;
  height: 100px;
  flex: 1;
  margin: 5px;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  height: 175px;
  margin: 5px;
`;

export const PlayerCards = styled.div`
  display: flex;
  flex-direction: row;
  height: 125px;
  margin: 5px;
`;

export const PlayerName = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  margin: 5px;

  p {
    color: #ff9000;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  background: #1518ee;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ff9000;
  width: 30%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#1518EE')};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
`;

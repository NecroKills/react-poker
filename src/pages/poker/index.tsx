import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

import {
  Container,
  DeckContainer,
  DeckBox,
  Deck,
  CardsContainer,
  Cards,
  Card,
  PlayersContainer,
  Player,
  PlayerCards,
  PlayerName,
  Button,
  ButtonContainer,
} from './styles';

const Poker: React.FC = () => {
  return (
    <>
      <Container>
        <DeckContainer>
          <DeckBox>
            <Deck />
          </DeckBox>
        </DeckContainer>

        <CardsContainer>
          <Cards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Cards>
        </CardsContainer>

        <PlayersContainer>
          <Player>
            <PlayerCards>
              <Card />
              <Card />
            </PlayerCards>
            <PlayerName>
              <p>Player 1</p>
            </PlayerName>
          </Player>

          <Player>
            <PlayerCards>
              <Card />
              <Card />
            </PlayerCards>
            <PlayerName>
              <p>Player 2</p>
            </PlayerName>
          </Player>

          <Player>
            <PlayerCards>
              <Card />
              <Card />
            </PlayerCards>
            <PlayerName>
              <p>Player 3</p>
            </PlayerName>
          </Player>

          <Player>
            <PlayerCards>
              <Card />
              <Card />
            </PlayerCards>
            <PlayerName>
              <p>Player 4</p>
            </PlayerName>
          </Player>

          <Player>
            <PlayerCards>
              <Card />
              <Card />
            </PlayerCards>
            <PlayerName>
              <p>Player 5</p>
            </PlayerName>
          </Player>
        </PlayersContainer>

        <ButtonContainer>
          <Button type="button" onClick={() => {}}>
            <span>
              <FiPlayCircle size={24} />
              ABRIR JOGO
            </span>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Poker;

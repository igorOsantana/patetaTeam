import { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import { PLAYERS } from '../Positions';
import { CSSTransition } from 'react-transition-group';

import { Player } from '../Player';

import {
  Container,
  Title,
  HiddenContainer,
  Description,
  PlayerContent,
} from './styles';

type PlayerActionCallProps = {
  shouldDo: string;
  grenades: { he: number; flashbang: number; motolov: number; smoke: number };
};

type CallProps = {
  id: number;
  map: string;
  title: string;
  call: {
    description: string;
    players: {
      1: PlayerActionCallProps;
      2: PlayerActionCallProps;
      3: PlayerActionCallProps;
      4: PlayerActionCallProps;
      5: PlayerActionCallProps;
      [index: number]: any;
    };
  };
};

export const Call: React.FC<CallProps> = ({
  title,
  call: { description, players },
}) => {
  const [showCall, setShowCall] = useState(false);
  const [heightCall, setHeightCall] = useState(0);

  const handleToggleCall = () => setShowCall((prevState) => !prevState);

  const handleHeight = (element: HTMLElement) => {
    const height = element.offsetHeight;
    setHeightCall(height);
  };

  return (
    <Container>
      <Title onClick={handleToggleCall} isVisible={showCall}>
        <h1>{title}</h1>
        <ArrowForwardIos />
      </Title>
      <HiddenContainer isVisible={showCall}>
        <Description>
          <span>Description</span>
          <p>{description}</p>
        </Description>
        {PLAYERS.map((PLAYER) => (
          <PlayerContent key={PLAYER.id}>
            <Player colorSecondary image={PLAYER.img} />
            <p>{players[PLAYER.id].shouldDo}</p>
          </PlayerContent>
        ))}
      </HiddenContainer>
    </Container>
  );
};

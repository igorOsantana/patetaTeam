import { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import { Positions } from '../Positions';

import { Container, Title, HiddenContainer } from './styles';

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
    };
  };
};

export const Call: React.FC<CallProps> = ({ title }) => {
  const [showCall, setShowCall] = useState(false);

  const handleToggleCall = () => setShowCall(prevState => !prevState);

  return (
    <Container onClick={handleToggleCall}>
      <Title isVisible={showCall}>
        <h1>{title}</h1>
        <ArrowForwardIos />
      </Title>
      {showCall && (
        <HiddenContainer>
          <h1>HIDED CONTAINER</h1>
        </HiddenContainer>
      )}
    </Container>
  );
};

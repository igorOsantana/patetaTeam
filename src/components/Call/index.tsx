import { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import { Positions } from '../Positions';

import { Container, Title, HiddenContainer } from './styles';

type CallProps = {
  title: string;
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
          <Positions />
        </HiddenContainer>
      )}
    </Container>
  );
};

import { Container, TRSide, CTSide } from './styles';

import Img from '../../assets/images/map_dust2.png';

export const Positions: React.FC = () => {
  return (
    <Container>
      <TRSide>
        <img src={Img} alt='ct simbol' />
      </TRSide>
      <CTSide>
        <img src={Img} alt='t simbol' />
      </CTSide>
    </Container>
  );
};

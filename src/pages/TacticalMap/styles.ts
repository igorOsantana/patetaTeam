import styled from 'styled-components';
import { fadeIn } from '../../global/styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  animation: ${fadeIn} 0.3s;
`;

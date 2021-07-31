import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem;
`;

export const CTSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    width: max(20%, 3rem);
    margin-bottom: 2rem;
  }

  > div {
    margin: 0.5rem auto;
  }
`;

export const TRSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: max(20%, 3rem);
    margin-bottom: 2rem;
  }
  > div {
    margin: 0.5rem auto;
  }
`;

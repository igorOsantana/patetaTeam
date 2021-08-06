import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 1rem 1rem 8rem 1rem;

  table {
    width: 95%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  tbody {
    &::before {
      height: 2em;
      display: table-row;
      content: '';
    }
  }

  td {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    &::before {
      height: 0.5em;
      display: table-row;
      content: '';
    }
    &::after {
      height: 0.5em;
      display: table-row;
      content: '';
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3.5rem;

  h1 {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: max(3vw, 2.5rem);
    text-transform: capitalize;
  }
  img {
    width: max(5rem, 10vw);
  }
`;

export const CsgoSimbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: max(5rem, 10vw);
  }
`;

export const SimbolSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: max(2.5rem, 5vw);
  }
`;

export const CTSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7b929c;
  text-transform: capitalize;
`;

export const TRSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #998d5d;
  text-transform: capitalize;
`;

export const ImgPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

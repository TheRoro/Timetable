import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100vw;
  padding: 1vw 3vw;
`

export const Table = styled.table`
  border: 1px solid #ffffff;
  border-radius: 1px;
  height: 80%;
  width: 100%;
  border-spacing: .5vw 0;
`;

export const TH = styled.th`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem;
  text-align: center;
`

type ClassProps = {
  color?: string; ///Passing Optional Props
  type?: string;
};

export const TD = styled.td<ClassProps>`
  box-sizing: border-box;
  color: #252525;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin: 1rem;
  background: ${({ color }) => color};

  ${props => props.type === 'first'
    && `
  `};

  ${props => props.type === 'last'
    && `
      border-bottom: 7px solid #151618;
  `};

  ${props => props.type
    && `
    transition: all .2s ease-in-out;
    &:hover {
      filter: brightness(95%);
      cursor: pointer;
    }
  `};
`

export const TDTime = styled.td`
  color: #ffffff;
  opacity: 0.8;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  border: none;
  padding: .7rem;
`

export const Modal = styled.div<ClassProps>`
  position: absolute;
  height: 30%;
  min-height: 220px;
  width: 25%;
  min-width: 310px;
  background: goldenrod;
  border: 1px solid #282c34;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .2s ease-in-out;
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export const ModalSubTitleRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const ModalTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 1rem;
  text-align: center;
`;

export const ModalSubTitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 2rem;
  text-align: center;
`;
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 982px;
  min-height: 720px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  color: black;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  padding: 0;

  & svg {
    stroke: var(--black-color);
  }
`;

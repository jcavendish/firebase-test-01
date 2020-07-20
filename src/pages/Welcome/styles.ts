import styled from 'styled-components';

export const Header = styled.div`
  background: #dddd35;
  height: 280px;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  background: #cc3030;
  height: 64px;
  width: 80%;
  align-self: flex-end;
  border-radius: 24px 24px 0 0;
`;

export const MenuItem = styled.p`
  font-weight: 600;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  & + div {
    display: flex;
    flex-direction: column;
  }
`;

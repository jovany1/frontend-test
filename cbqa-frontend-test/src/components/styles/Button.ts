import styled from 'styled-components';

const Button = styled.div`
  width: 170px;
  margin: 25px auto 0;
  display: flex;
  justify-content: center;
  color: #ffffff;
  background: #0db72e;
  border: 0;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  box-sizing: border-box;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  border-radius: 2em;
  font-weight: bold;

  &:hover {
    background-color: #0a9224;
  }
`;

export default Button;

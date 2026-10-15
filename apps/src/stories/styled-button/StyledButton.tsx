import { styled } from 'styled-components';

const StyledButton = styled.button`
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`

const Button = () => {
  return <StyledButton>Olá meu caro</StyledButton>
}

export default {
  title: 'alfabit',
  component: Button,
}

export const DefaultButton = () => <Button/>;
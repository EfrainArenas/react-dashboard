import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 20px;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ThemeToggle = ({ toggleTheme }) => {
  return (
    <>
      <Button onClick={toggleTheme}>🌞 / 🌙</Button>
    </>
  );
};

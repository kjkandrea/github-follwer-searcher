import styled from 'styled-components';

const App = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100%;
  max-height: 667px;

  border: var(--border);
  border-radius: 6px;
  background-color: white;

  input {
    padding: 5px 12px;
    border: var(--border);
  }

  button {
    padding: 4px 16px;
    background-color: var(--color-primary);
    color: #fff;
    border: var(--border-transparent);
  }
`;

export default App;
